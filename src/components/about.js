import React, { Component } from 'react'
import Login from '../containers/login'

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
        { this.props.route.path }
      </div>
    )
  }
}
