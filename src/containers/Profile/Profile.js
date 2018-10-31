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
                    <div className="card">
                        <div className="card-header">
                            Profile Page
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Username : </h3>
                            <p className="card-text">Email address : </p>
                            <Link to='/profile/edit-profile'  className="btn btn-primary">Edit profile</Link><br/><br/>
                            <Link to='/login'  className="btn btn-primary">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HOC(Profile);