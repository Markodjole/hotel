import React, { Component } from 'react';
import Auth from '../../Auth/Auth';

class EditProfile extends Component {

    render(){
        return ( 
            <div>
                    {/* <Auth
                        render={({ 
                            emailInputChange,
                            loginHandler,
                            checkIfFormIsValid,
                            repeatPasswordInputChange,
                            passwordInputChange,
                            usernameInputChange }) => {
                        
                          return  <div className='container'>
                                <div className='formDiv'>
                                {this.state.isLoginPage ? <h3>Login</h3> : <h3>Register</h3> }
                                <hr/>
                                    <form className="needs-validation" onSubmit={this.state.isLoginPage ? this.loginHandler : this.registerHandler}>
                                        { inputs }
                                    <button disabled={!this.checkIfFormIsValid()} type="submit" className="btn btn-primary">Submit</button>
                                    
                                    <div>{this.state.loginError}</div>
                                    </form>
                                    </div>
                            </div>
                        }}
                    /> */}
    
                
            </div>
         );
    }
    
}
 
export default EditProfile;