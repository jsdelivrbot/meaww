import React, { Component } from 'react'
import Login from '../containers/login'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.currentUser.id) {
      return <div> You are not logged in </div>
    }
    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card hovercard">
                <div className="cardheader">
                </div>
                <div className="avatar">
                   <img src={this.props.currentUser.picture} />
                </div>
                <div className="info">
                    <div className="title">
                        <span>{this.props.currentUser.name}</span>
                    </div>
                    <div className="desc">{this.props.currentUser.id}</div>
                     <Login />
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
