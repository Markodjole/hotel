import React, { Component } from 'react';
import Input from '../UI/Input';

class Login extends Component {
    state = {
        email: {
            id: 'email',
            value: '',
            valid: false,
            placeholder: 'Email',
            className: '',
            method: 'emailInputChange',
            error: 'Please provide a valid email'

        },
        password: {
            id: 'password',
            value: '',
            valid: false,
            placeholder: 'Password',
            method: 'passwordInputChange',
            error: 'Password must be minimum 5 caracters long'

        }
    }

    loginHandler = () => {

    }

    checkIfFormIsValid = () => {
        let validFields = [];
        for(let field in this.state){
            
            validFields.push(this.state[field].valid)
          }
          return validFields.filter(item => !item).length == 0 ? true : false;
    }

    render(){
        const inputs = Object.values(this.state).map(field => {
            return <Input 
                key={field.id}
                placeholder={field.placeholder}
                method={this[field.method]}
                valid={field.valid}
                error={field.error}
                label={field.placeholder}
            />
        })
    
            return ( 
            
                <div className='container'>
                    <div className='formDiv'>
                    <h3>Login</h3>
                    <hr/>
                        <form className="needs-validation" onSubmit={this.registerHandler}>
                            { inputs }
                        <button disabled={!this.checkIfFormIsValid()} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                </div>
                
             );
        }
    
}
 
export default Login;