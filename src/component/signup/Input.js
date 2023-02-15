import React, { Component } from 'react'
export default class Input extends Component{
    render(){
        return(
            <div className='user-input'>
                <label>{this.props.label}</label>
                <input placeholder={this.props.placeholder} type={this.props.type} onChange={this.props.change}/>
            </div>
        )
    }
}