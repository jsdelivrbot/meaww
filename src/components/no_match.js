import React, { Component } from 'react';

export default class NoMatch extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        { this.props.route.path } 404 not found sorry
      </div>
    )
  }
}
