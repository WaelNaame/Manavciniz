import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
//import { Router, Route, IndexRoute, browserHistory} from 'react-router';


import Cart from './cart';
import Orders from './orders';
import Homepage from './homepage';
import SigninPage from './SigninPage';



const App = () => {
    return(
    <div>
        <BrowserRouter basename="/directory-name/">
        <div>   
        <Route path="/" exact component={SigninPage}/>
        <Route path="/homepage" component={Homepage} />
        <Route path="/cart"  component={Cart}/>
        <Route path="/orders"  component={Orders}/>
        </div>
        </BrowserRouter>
    </div>
    );
}

export default App;