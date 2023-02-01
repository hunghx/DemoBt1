import React, { Component } from 'react'

export default class Register extends Component {
    
    constructor(props){
        super(props);
        this.state={
            username:"",
            pass: "",
            rePass:"",
            email:""
        }
    }
    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = ()=>{
        let lists = this.props.lists
        let checkUserName = true;
        for (let i = 0; i < lists.length; i++) {
            if(lists[i].username === this.state.username){
                // Đã tồn tại user
                checkUserName = false
                alert("Đã tồn tại username, nhập tên khac")
                break;
            }
        }
        let checkPass = false
        if(this.state.pass.length>=6 && this.state.pass===this.state.rePass){
            checkPass = true;
        }else{
            alert("Mat khau khong thoa man hoac khong trung khop")
        }
        if(checkUserName && checkPass){
            let newUser = {
                username: this.state.username,
                pass : this.state.pass,
                email: this.state.email
            }
            this.props.recieveData(newUser)
        }
        
    }
  render() {
    return (
        <div className="form-panel two">
        <div className="form-header">
          <h1>Register Account</h1>
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
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="pass"
                required="required"
                value={this.state.pass}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="rePass"
                required="required"
                value={this.state.rePass}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required="required" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <button type="submit" onClick={this.handleSubmit}>Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
