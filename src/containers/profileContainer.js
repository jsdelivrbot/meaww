import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';


class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Link to={`/`}>Home</Link>
        <Profile {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    logged: state.logged,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(ProfileContainer);