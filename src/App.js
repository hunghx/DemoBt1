
import './App.css';
import React, { Component } from 'react'
import $ from 'jquery';
import Login from './components/Login';
import Register from './components/Register';

 //npm install jquery --save
export default class App extends Component {
  constructor(props){
    super(props);
    let list =JSON.parse(localStorage.getItem("list-user"))
    console.log(list);
    this.state={
      listUsers: list
    }
    console.log(this.state.listUsers);
  }
  handleLogin = (dataLogin)=>{
      let checkLogin = false
      for (let i = 0; i < this.state.listUsers.length; i++) {
        if(this.state.listUsers[i].username === dataLogin.username && this.state.listUsers[i].pass === dataLogin.password){
          checkLogin=true;
          break;
        }
        
      }
      if(checkLogin){
        alert("Đăng nhập thành công")
      }else{
        alert("Sai tài khoản hoặc mật khẩu")
      }
  }
  recieveData=(obj)=>{
    
    this.setState({
      listUsers: [...this.state.listUsers,obj]
    })
    alert("Đăng kí thanh công")
  }
  componentDidMount(){
    $(document).ready(function() {
      var panelOne = $('.form-panel.two').height(),
        panelTwo = $('.form-panel.two')[0].scrollHeight;
    
      $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
        e.preventDefault();
    
        $('.form-toggle').addClass('visible');
        $('.form-panel.one').addClass('hidden');
        $('.form-panel.two').addClass('active');
        $('.form').animate({
          'height': panelTwo
        }, 200);
      });
    
      $('.form-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).removeClass('visible');
        $('.form-panel.one').removeClass('hidden');
        $('.form-panel.two').removeClass('active');
        $('.form').animate({
          'height': panelOne
        }, 200);
      });
    });
  }
  render() {
    localStorage.setItem('list-user',JSON.stringify(this.state.listUsers))
    return (
      <div className="App">
        <div className="form">
          <div className="form-toggle"/>
          <Login handleLogin={this.handleLogin}/>
          <Register recieveData={this.recieveData} lists = {this.state.listUsers}/> 
        </div>
      </div>
    )
  }
}
// jquery code write here
