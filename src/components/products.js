import React from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../actions';
import { CardGroup, Row, Col } from 'react-bootstrap';
import ProductItem from './product';
import Category from './category';

//import Cart from './cart';

class Products extends React.Component {



    addbook = () => {
        this.props.addProduct();
    }

    deletebook = () => {
        this.props.deleteProduct();
    }
    render() {

        const productsList = this.props.productsArr.map(function (product) {
            return (
                <div key={product.id}>
                    <ProductItem
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                    ></ProductItem>
                </div>
            )
        })
        //       <Cart />
        return (
            <div>
                <Row>
                    <Col xs={11} sm={3} >
                        <Category />
                    </Col>
                    <Col xs={12} sm={9} >
                        <CardGroup >
                            {productsList}
                        </CardGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { productsArr: state.products.Currentproducts };
};

export default connect(mapStateToProps, { addProduct, deleteProduct })(Products);