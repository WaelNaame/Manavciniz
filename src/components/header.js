import React from 'react';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg"  variant="dark" style={{background:'#17a2b8'}} >
                <Navbar.Brand href="/">My SuperMarket</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/admin" style={{ marginRight : '10px' , marginLeft : '10px', color: 'white' }} >Admin </Link>
                        <Link to="/contacts" style={{ color: 'white' }} >Contact us</Link>
                    </Nav>
                    <Nav>
                        <Link to= "/orders" style={{ marginRight : '10px' , marginLeft : '10px' , color: 'white' }} >Oreders</Link>
                        <Link eventKey={2} to="/cart">
                            <Link
                                to="/cart"
                                // onClick={this.handleCart.bind(this)}  
                                ref="cartButton"
                            >
                                < FaCartArrowDown color="white" size={32} />
                            </Link>
                            <span>  </span><Badge variant="success">{ this.props.cart.length }</Badge>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect( mapStateToProps)(Header)