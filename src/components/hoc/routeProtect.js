import React, { Component } from 'react';
import { connect } from 'react-redux';

const routeProtect = (WrappedComponent) => {
  class HOC extends Component {

    componentDidMount(){
      if(!this.props.user){
        this.props.history.push('/login');
      }
    }

    render() {
      return <WrappedComponent  {...this.props} />;
    }
  }

const mapStateToProps = state => {
  // debugger;
  return {
      stories: state.stories,
      comments: state.comments,
      loading: state.loading ,
      user: state.userLoggedIn
  };
};

return connect(mapStateToProps)(HOC);
};
export default routeProtect;
