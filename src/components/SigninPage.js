import React from 'react';
import SigninForm from './SigninForm';

class SigninPage extends React.Component {
    render(){
       return(
           <div style={{marginLeft : '50px' , marginTop: '100px' , marginRight: '20px'}} ><h1>login </h1>
           <div className ="row">
           <div className="col-md-4 col-md-offset-4">
              <SigninForm />
           </div>
           </div>
           </div>
       )
    }
}


export default SigninPage ;