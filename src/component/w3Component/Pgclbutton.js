import React, { Component } from 'react'

export default class Pgclbutton extends Component {
  render() {
    return (
        <button className={`pgcl-button ${this.props.cla}`} onClick={this.props.handleClick}>{this.props.name}</button>
    )
  }
}
