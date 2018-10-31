import React, { Component } from 'react'
import './Profile.css';
import { Link } from 'react-router-dom';
import routeProtect from '../../components/hoc/routeProtect';
import Navbar from '../../components/UI/Navbar/Navbar';

class Profile extends Component {
    state = {  }

    componentDidMount(){
        if(!this.props.user) {
            this.props.history.push('/login') 
        } 
        
    }

    render() { 
        return ( 
            <div>
                <Navbar />
                <div className='container'>
                    <div className="welcomeProfile">
                        <div className="card">
                            <div className="card-header">
                                Profile Page
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Username : {this.props.user && this.props.user.username.value.toUpperCase()}</h5>
                                <p className="card-text">Email address : {this.props.user && this.props.user.email.value}</p>
                                <Link to='/profile/edit-profile'  className="btn btn-primary">Edit profile</Link><br/><br/>
                                <Link to='/login'  className="btn btn-primary">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default routeProtect(Profile);