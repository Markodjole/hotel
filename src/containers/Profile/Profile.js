import React, { Component } from 'react'
import './Profile.css';
import { Link } from 'react-router-dom';
import HOC from '../../components/hoc/routeProtect';

class Profile extends Component {
    state = {  }

    componentDidMount(){
        if(!this.props.user) {
            this.props.history.push('/login') 
        } 
        
    }

    render() { 
        return ( 
            <div className='container'>
                <div className="welcomeProfile">
                    <div class="card">
                        <div class="card-header">
                            Profile Page
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">Username : </h3>
                            <p class="card-text">Email address : </p>
                            <Link to='/profile/edit-profile'  class="btn btn-primary">Edit profile</Link><br/><br/>
                            <Link to='/login'  class="btn btn-primary">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HOC(Profile);