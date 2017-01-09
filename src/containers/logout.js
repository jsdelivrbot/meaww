import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { userLogsOut } from '../actions/index';
import { bindActionCreators } from 'redux';


class Logout extends Component {
  constructor(props) {
    super(props);
  }

  renderLogout = () => {
    if (this.props.logged === true) {
      return( 
        <div>
          <a onClick={() => userLogsOut()}> 
            Log out XXX
          </a>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
       { this.renderLogout() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    logged: state.logged
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({userLogsOut: userLogsOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);