import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { userLogged } from '../actions/index';
import { userLogOut } from '../actions/index';
import { bindActionCreators } from 'redux';
import Logout from '../components/logout';

const APP_ID = "410583515973375";
const PERMISSIONS = "name,email,picture"

class Login extends Component {
  constructor(props) {
    super(props);
  }

  renderLogin = () => {
    if (this.props.logged === false) {
      
      return( 
        <FacebookLogin
          appId={APP_ID}
          autoLoad={false}
          fields={PERMISSIONS}
          callback={this.props.userLogged}
          icon="fa-facebook" />)
    
    } else if (this.props.logged === true) {
      
      return(
        <Logout userLogOut={this.props.userLogOut} />)
    }
  }

  render() {
    return(
      <div>
       { this.renderLogin() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    logged: state.logged,
    currentUser: state.response
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({userLogged, userLogOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);