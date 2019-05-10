import React from 'react';
import { connect } from 'react-redux';
import { addToCart, updateCart } from '../actions';
import { Button } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          alert: null
        };
      }


      hideAlert() {
        console.log('Hiding alert...');
        this.setState({
          alert: null
        });
      }


    handleCart() {

        const product = [ ...this.props.cart, {
            id : this.props.id,
            name : this.props.name,
            price : this.props.price,
            image : this.props.image,
            category : this.props.category,
            quantity : 1
        }]

        let _id = this.props.id

        let cartIndex = this.props.cart.findIndex(function(cart){
            return cart.id === _id
        })
        if(cartIndex === -1){
        this.props.addToCart(product)
        }else{
            this.props.updateCart(_id ,1)
        }
        
        const getAlert = () => (
            <SweetAlert 
              success 
              title="Added successfuly" 
              onConfirm={() => this.hideAlert()}
            >
              
            </SweetAlert>
          );
      
          this.setState({
            alert: getAlert()
          });

    }

    onIncrement(){
        let _id = this.props.id
        this.props.updateCart(_id ,1)
    }

    render() {
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        return (
            <div className="product">
                <div className="product-image">
                    <img
                        src={image}
                        alt={name}
                    />
                </div>
                <h4 className="product-name">{name}</h4>
                <p className="product-price">{price}</p>
                <div className="stepper-input">
            </div>
            <div className="product-action">
            <Button onClick={this.handleCart.bind(this)} variant="outline-info" >Add To Cart</Button>
            </div>
            {this.state.alert}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { cart: state.cart.cart};
};

export default connect(mapStateToProps, { addToCart, updateCart })(ProductItem);