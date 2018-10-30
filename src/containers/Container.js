import React, { Component } from 'react';
// import {Route, Switch} from 'react-router-dom';

// import Login from '../components/Login/Login';
// import Page404 from '../components/404/404';
// import Home from '../components/Home/Home';
// import User from '../components/User/User';
// import Register from './containers/Register';
// import Welcome from '../components/Welcome/Welcome';

class Container extends Component {
    state = { 
        loginUserName: 'sadasdassa'
     }


    render() {
        console.log(this.props, 'CONTAINER') 
        return (
            <div>
                {this.props.renderState(this.state)}
            </div>
        )
    }
}
 
export default Container;