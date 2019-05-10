import React from 'react';
import Header from './header';
import Products from './products';

class Homepage extends React.Component {
    render(){
        return(
            <div>
               <Header />
               <Products /> 
            </div>
        );
    }
}

export default Homepage;