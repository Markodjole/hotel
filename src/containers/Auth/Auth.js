import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Auth.css';
import Input from '../../components/UI/Input';
import withForm from '../../components/hoc/withForm';
import * as log from '../../store/actions/fetch'; 
import { connect } from 'react-redux';
import Navbar from '../../components/UI/Navbar/Navbar';


class Auth extends Component {
  
    render(){

    const inputs = Object.values(this.props.formState.form).map(field => {
        const input = (
            <Input
            value={field.value} 
            key={field.id}
            placeholder={field.placeholder}
            method={this.props[field.method]}
            valid={field.valid}
            error={field.error}
            label={field.placeholder}
        />
        )
        if(!this.props.formState.isLoginPage && field.id !== 'oldPassword'){
            return input
        } 
       return field.id === 'email' || field.id === 'password' ? input : null
        
        
    })

        return ( 
        
            <div>
                <Navbar />

                <div className='container'>
                    <div className='formDiv'>
                    {this.props.formState.isLoginPage ? <h3>Login</h3> : <h3>Register</h3> }
                    <hr/>
                        <form className="needs-validation" onSubmit={this.props.formState.isLoginPage ? this.props.loginHandler : this.props.registerHandler}>
                            { inputs }
                        <button disabled={!this.props.checkIfFormIsValid()} type="submit" className="btn btn-primary">Submit</button>
                        
                        <div>{this.props.formState.loginError}</div>
                        </form>
                        </div>
                </div>
            
            </div>
            
         );
    }
    
}

const mapStateToProps = (state) => {
    return {
        user : state.userLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => dispatch(log.login(user)),
        onLogout: () => dispatch(log.logout())
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(withForm(Auth));