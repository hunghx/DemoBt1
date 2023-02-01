import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""        
        }
    }
    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let dataLogin = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.handleLogin(dataLogin)
    }
  render() {
    return (
        <div className="form-panel one">
        <div className="form-header">
          <h1>Account Login</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required="required"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required="required"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-remember">
                <input type="checkbox" />
                Remember Me
              </label>
              <a className="form-recovery" href="jvfdvfvf">
                Forgot Password?
              </a>
            </div>
            <div className="form-group">
              <button type="button" onClick={this.handleSubmit}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
