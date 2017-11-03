import React, { Component } from 'react';

import AuthLogo from '../img/svg/houser-auth-logo.svg';
import { Link, withRouter } from 'react-router-dom';

import { authenticateUser,  registerUser } from '../services/auth.services';


 class AuthView extends React.Component {

  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.history.push("/dashboard")
  
  }

  handleInputChange(e){
    e.preventDefault()  
    const key = e.target.id 
    const value = e.target.value
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <div className="auth-view-container">
        <div className="form-body-auth">
        <img className="auth-logo" src={AuthLogo} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-label">Username</div>
              <input 
                id="username"
                value={this.state.username}
                className="auth-type" 
                type = "text" 
                required
                onChange={this.handleInputChange}
              />

          <div className="form-label">Password</div>
              <input 
                id="password"
                value={this.state.password}
                className="auth-type" 
                type="password" 
                required
                onChange={this.handleInputChange}
              />

          <div className="button-set">


          <button type="submit" className="login-btn">Login</button> 
          <button type="submit" className="reg-btn">Register</button> 

          </div>
          
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthView)
