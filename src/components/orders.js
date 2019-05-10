import React from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../actions';
import { Button, Badge, Container, Row, Col, Table } from 'react-bootstrap';
import Header from './header';
import SweetAlert from 'react-bootstrap-sweetalert';
import img from '../Assets/empty-cart.jpg'

class Orders extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDetails: null
        };
    }

    hideAlert() {
        console.log('Hiding alert...');
        this.setState({
            showDetails: null
        });
    }
    

    handleDetails (orderArr) {

        const cartItemsList = orderArr.map(function (order) {
            return (
                <Row className="cart-item" key={order.id} >
                    <Col xs={12} sm={4} >
                        <img className="product-image" src={order.image} />
                        <div className="product-info">
                            <p className="product-name">{order.name}</p>
                            <p className="product-price">{order.price}</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} >
                        <h6>qty. <Badge variant="success">{order.quantity}</Badge></h6>
                    </Col>
                    <Col xs={12} sm={2} >
                        <h6>total price: {order.quantity * order.price}</h6>
                    </Col>
                </Row>
            )
        })

        const getAlert = () => (
            <Container>
                <SweetAlert
                    title="Here's a your order!"
                    onConfirm={this.hideAlert.bind(this)}
                    onEscapeKey={this.hideAlert.bind(this)}
                    onOutsideClick={this.hideAlert.bind(this)}
                    style={{ width: '50%'  }}
                >
                {cartItemsList}

                </SweetAlert>
            </Container>
        );

        this.setState({
            showDetails: getAlert()
        });
    }

    handleReceived () {
        
        const getAlert = () => (
            <Container style={{overflowy : 'scroll !important'}} >
                <SweetAlert
                    title="Here's a your order!"
                    onConfirm={this.hideAlert.bind(this)}
                    style={{ width: '50%' , overflowy : 'scroll !important'  }}
                >
                <Row className="cart-item"  >
                    <Col xs={12} sm={4} >
                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg" />
                        <div className="product-info">
                            <p className="product-name">Mango - 1 Kg</p>
                            <p className="product-price">75</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} >
                        <h6>qty. <Badge variant="success">2</Badge></h6>
                    </Col>
                    <Col xs={12} sm={2} >
                        <h6>total price: 290</h6>
                    </Col>
                </Row>
                <Row className="cart-item"  >
                    <Col xs={12} sm={4} >
                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg" />
                        <div className="product-info">
                            <p className="product-name">Almonds - 1/4 Kg</p>
                            <p className="product-price">200</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} >
                        <h6>qty. <Badge variant="success">3</Badge></h6>
                    </Col>
                    <Col xs={12} sm={2} >
                        <h6>total price: 340</h6>
                    </Col>
                </Row>

                </SweetAlert>
            </Container>
        );

        this.setState({
            showDetails: getAlert()
        });
    }

    render() {
        if (this.props.orders[0]) {
            return this.renderOrders();
        } else {
            return this.renderEmpty();
        }
    }

    renderEmpty() {
        return (
            <div>
                <Header />
                <div className="empty-cart">
                    <img
                        src={img}
                        alt="empty-cart"
                    />
                    <h2>You dont have any order yet !</h2>
                </div>
            </div>
        )
    }
    renderOrders() {
        const orderItemsList = this.props.orders.map( (orderArr) => {
            return (
                <tr>
                    <td>{orderArr.length}</td>
                    <td>${totals(orderArr).amount}</td>
                    <td>1/4/2019</td>
                    <td><Badge variant="warning">Pending..</Badge></td>
                    <td><Button onClick={() => this.handleDetails(orderArr)} variant="primary" size="sm" >Details</Button></td>
                </tr>
            )
        })

        return (
            <div >
                <Header />
                {this.state.showDetails}
                <Container>

                    <Table striped bordered hover style={{ marginTop: '30px' }} >
                        <thead>
                            <tr>
                                <th>No. Product</th>
                                <th>Total price </th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td>$280</td>
                                <td>1/4/2019</td>
                                <td><Badge variant="success">Received</Badge></td>
                                <td><Button onClick={this.handleReceived.bind(this)} variant="primary" size="sm" >Details</Button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>$120</td>
                                <td>4/6/2019</td>
                                <td><Badge variant="success">Received</Badge></td>
                                <td><Button onClick={this.handleReceived.bind(this)} variant="primary" size="sm" >Details</Button></td>
                            </tr>
                            {orderItemsList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders.orders
    }
}
export default connect(mapStateToProps, { createOrder })(Orders);

export function totals(payloadArr) {
    const totalAmount = payloadArr.map(function (cartArr) {
        return cartArr.price * cartArr.quantity;
    }).reduce(function (a, b) {
        return a + b;
    }, 0);


    return { amount: totalAmount.toFixed(2) }
}