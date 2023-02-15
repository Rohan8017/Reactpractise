import React, { Component } from 'react'

export default class Trebutton extends Component {
  render() {
    return (
      <div className='trebuttons' onClick={this.props.handleClick}>
        {this.props.text} {this.props.fun && <i class="fa fa-caret-down" aria-hidden="true"></i>}
      </div>
    )
  }
}
