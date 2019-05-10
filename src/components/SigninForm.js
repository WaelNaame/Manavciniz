import React from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions';
import { Redirect } from 'react-router-dom'

class SigninForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            phone_number: '',
            password: ''
        };
    }

    

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.props.userSignup({phone_number : this.state.phone_number , password : this.state.password});
    }

    renderLogin(){
        return(
            <div>
                <h2>{this.props.message}</h2>
            <form onSubmit={this.onSubmit.bind(this)} >
            <div className ="form-group">
            <label className="control-label">Phone Number</label>
            <input
            value={this.state.phone_number_val}
            onChange={this.onChange.bind(this)}
            type="text"
            name="phone_number"
            className="form-control"
            />
            </div>
            <div className ="form-group">
            <label className="control-label">Password</label>
            <input
            value={this.state.phone_number_val}
            onChange={this.onChange.bind(this)}
            type="password"
            name="password"
            className="form-control"
            />
            </div>
            <div className ="form-group">
            <button className="btn btn-primary btn-lg">
            Sign in
            </button>
            </div>
            </form>
            </div>
        )
    }
    renderHomePage(){
           return(
               <Redirect to="/homepage" />
           )
    }

    render(){
       if(this.props.isLogin){
         return this.renderHomePage()
       }
       else{
        return this.renderLogin()
       }
    }
}

function mapStateToProps(state) {
    return {
        isLogin : state.auth.isLogin,
        message : state.auth.message
    }
}
export default connect(mapStateToProps, { userSignup })(SigninForm);