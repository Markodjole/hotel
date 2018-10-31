import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Admin.css';
import HOC from '../hoc/routeProtect';
import Navbar from '../UI/Navbar/Navbar'

class Admin extends Component {

    state = {
        registerdUsers: []
    }

    componentDidMount(){
        if(!this.props.user || this.props.user.username.value !== 'admin@admin.com' && this.props.user.password.value !== 'admin'){
            this.props.history.push('/login');
        }
        this.localStorageItems();
    }

    localStorageItems = () => {
       const items = [];
        for(let key in localStorage){
            if(key.includes('@')){

                let item = localStorage.getItem([key])
                items.push({email:key, value:item})
            }
            
        }
        this.setState({
            ...this.state,
            registerdUsers: items
        })
    }

    deleteUser = (email) => {
        console.log(email)
        localStorage.removeItem(email);
        const newUsers = this.state.registerdUsers.filter(item => item.email !== email) ;
        this.setState({
            ...this.state,
            registerdUsers: newUsers
        })
    }
   
   render(){
    return ( 
        <div>
            <Navbar />


        <div className='container'>

            <div className='welcomeAdmin'>
            {/* <button onClick={()=>this.props.history.push('/home')} className='btn btn-light'>Home</button>   */}

                <h3>Registered users</h3>
                <div className='users'>
                    {/* <button ><Link style={{'textDecoration': 'none'}} to='/login'>Login</Link></button> */}
                    {this.state.registerdUsers.map(item => <div key={item.email} className='user'>{item.email} <span className='badge badge-danger userDelite' onClick={() => this.deleteUser(item.email)}>X</span></div>)}
                </div>
                {!this.state.registerdUsers.length && <div className="noUsers">NO REGISTERD USERS</div>}

            </div>
        </div>

        </div>
     );
   }
    
}
 
export default HOC(Admin);