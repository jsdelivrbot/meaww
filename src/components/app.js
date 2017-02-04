import React, { Component } from 'react';
import Login from '../containers/login';
import { Link } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to={`/profile`}>Profile</Link>
        <Login />
      </div>
    )
  }
}
