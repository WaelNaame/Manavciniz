import React from 'react';
import { connect } from 'react-redux';
import { getCategory, getProducts } from '../actions';
import {Button} from 'react-bootstrap';


class Category extends React.Component {

    componentDidMount() {
        this.props.getCategory();
    }

    handleCategory(value) {
        this.props.getProducts(value)
    }

    render() {
        if (this.props.categories) {
            return this.renderCategory();
        } else {
            return this.renderEmpty();
        }
    }
    renderEmpty() {
        return (
            <div>
            </div>
        )
    }
    renderCategory() {
        const buttonStyle = {
            width:'100%',
            marginTop:'10px',
            marginLeft:'16px'
        }
        const categoryList = this.props.categories.map((Item) => {
            return (
                <Button onClick={this.handleCategory.bind(this, Item)} key={Item} style ={buttonStyle} variant="outline-info">{Item}</Button>
            )
        })

        return (
            <div>
                <Button onClick={() => this.props.getProducts('all')} style ={buttonStyle}  variant="outline-primary">All Category</Button>
                {categoryList}
            </div>
            ) 
    }
}

const mapStateToProps = state => {
    return {
         categories: state.products.categories
     };
};

export default connect(mapStateToProps, { getCategory, getProducts })(Category);
