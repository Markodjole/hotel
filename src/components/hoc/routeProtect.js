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



// export default function(ComposedComponent) {
//   class Authentication extends Component {
//     static contextTypes = {
//       router: React.PropTypes.object
//     }

//     componentWillMount() {
//       if (!this.props.authenticated) {
//         this.props.history.push('/signin');
//       }
//     }

//     componentWillUpdate(nextProps) {
//       if (!nextProps.authenticated) {
//         this.props.history.push('/signin');
//       }
//     }

//     render() {
//       return <ComposedComponent {...this.props} />
//     }
//   }

//   function mapStateToProps(state) {
//     return { authenticated: state.auth.authenticated };
//   }

//   return connect(mapStateToProps)(Authentication);
// }