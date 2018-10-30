import React from 'react';
import Auth from '../../containers/Auth/Auth'

const withAuth = (Component) => {
    return class extends React.Component {
      render() {
        return (
          <Auth render={(mouse) => (
            <Component {...this.props}  mouse={mouse} />
          )}/>
        );
      }
    }
  }
  export default withAuth;