import React, { Component } from 'react';
import withForm from '../../../components/hoc/withForm';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal/Modal';

class EditProfile extends Component {

    checkIfFormIsValid = () => {
        let validFields = [];
        for(let field in this.props.formState.form){
            
            validFields.push(this.props.formState.form[field].valid)
          }
          return validFields.filter(item => !item).length == 0 ? true : false;
        }

    render(){
        const user = this.props.userLoggedIn
        console.log(user)
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
                return input;  
        })
    
            return ( 
            
                <div>
        
                    <div className='container'>
                        <div className='formDiv'>
                        <h3>Edit profile</h3>
                        <hr/>
                            <form className="needs-validation" onSubmit={this.props.editProfileHandler}>
                                { inputs }
                            <button disabled={!this.checkIfFormIsValid()} type="submit" className="btn btn-primary">Submit</button>
                            
                            <div>{this.props.formState.loginError}</div>
                            </form>
                            </div>
                    </div>
                    {this.props.formState.modalOpened && <Modal closeModal={this.props.closeModal} /> }
                
                </div>
                
             );
        }
    
}
 
export default withForm(EditProfile);