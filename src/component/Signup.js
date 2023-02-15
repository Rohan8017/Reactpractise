import React, { Component } from 'react';
import Input from './signup/Input'
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            userSwitch: this.props.userSwitch
        }
    }
    setuserName = (e) => {
        this.setState({ userName: e.target.value })
    }
    setuserEmail = (e) => {
        this.setState({ userEmail: e.target.value })
    }
    setuserPassword = (e) => {
        this.setState({ userPassword: e.target.value })
    }
    setuserSwitch=()=>{
        if(this.state.userSwitch===0){
            this.setState({ userSwitch: 1 });
        }else{
            this.setState({ userSwitch: 0 });
        }
    }
    render() {
        return (
            <div className='sign-up'>
                <header onClick={this.setuserSwitch}><h2><span>Sign up</span>/<span >Log in</span></h2></header>
                {this.state.userSwitch === 0 && <form className='signup-form'>
                    <Input label='Name' type='text' placeholder='enter your name' change={this.setuserName} />
                    <Input label='Email' type='email' placeholder='enter your email' change={this.setuserEmail} />
                    <Input label='Password' type='password' placeholder='enter your password' change={this.setuserPassword} />
                    <div className='signup-btn'><button>Sign up</button></div>
                </form>}
                {this.state.userSwitch ===1 && <form className='login-form'>
                    <Input label='Email' type='email' placeholder='enter your email' change={this.setuserEmail} />
                    <Input label='Password' type='password' placeholder='enter your password' change={this.setuserPassword} />
                    <div className='login-btn'><button>Log in</button></div>
                </form>}
                <div className='cross-button' onClick={this.props.handleClick}>&times;</div>
            </div>
        )
    }
}