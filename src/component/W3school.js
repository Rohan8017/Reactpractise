import React, { Component } from 'react'
import Signup from './Signup';
import Pgclbutton from './w3Component/Pgclbutton'
import Trebutton from './w3Component/Trebutton'

export default class W3school extends Component {
    constructor(){
        super();
        this.state={
            page:0,
            userSwitch:0
        }
    }
    handleClick1=()=>{
        this.setState({page:1,userSwitch:1})
    }
    handleClick3=()=>{
        this.setState({page:1,
            userSwitch:0
        })
    }
    handleClick2=()=>{
        this.setState({page:0})
    }
  render() {
    return (
        <div>
            {this.state.page === 0 && <div className='w3school-header'>
              <div className='logo-img'>
                  <img src='.\w3schools-logo-icon.png' alt='w3school logo'/>
              </div>
              <Trebutton text="Tutorials" fun="0"/>
              <Trebutton text="References" fun="0"/>
              <Trebutton text="Exercises" fun="0"/>
              <Trebutton text="Sign Up" handleClick={this.handleClick3}/>
              <div className='float-right'>
                  <div className='icons'>
                      <div className='icons-mode'><i className="fa fa-adjust" aria-hidden="true"></i></div>
                      <div className='icons-web'><i className="fa fa-globe" aria-hidden="true"></i></div>
                      <div className='icons-search'><i className="fa fa-search" aria-hidden="true"></i></div>
                  </div>
                  <div className='pgcl-buttons'>
                      <Pgclbutton name="Pro" cla='b-a'/>
                      <Pgclbutton name="Get Certified" cla='p'/>
                      <Pgclbutton name="Create Website" cla='y'/>
                      <Pgclbutton name="Log in" cla='g' handleClick={this.handleClick1} />
                  </div>
              </div>
            </div>}
            {this.state.page === 1 && <Signup  handleClick={this.handleClick2} userSwitch={this.state.userSwitch}/>}
        </div>
    )
  }
}
