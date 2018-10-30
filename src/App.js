import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Page404 from './components/404/404';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import User from './components/User/User';
import Auth from './containers/Auth/Auth';
import Welcome from './components/Welcome/Welcome';
import Profile from './containers/Profile/Profile';
import EditProfile from './containers/Profile/EditProfile/EditProfile';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/register" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/admin" component={Admin} />
          <Route path="/profile/edit-profile" component={EditProfile} />
          <Route path="/profile" component={Profile} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
