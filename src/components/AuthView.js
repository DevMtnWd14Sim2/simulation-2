import React, { Component } from 'react';

import AuthLogo from '../img/svg/houser-auth-logo.svg';
import { Link } from 'react-router-dom';

import { authenticateUser,  registerUser } from '../services/auth.services';


export default class AuthView extends React.Component {
  render() {
    return (
      <div className="auth-view-container">
        <div className="form-body-auth">
        <img className="auth-logo" src={AuthLogo} />
        <form>
          <div className="form-label">Username</div>
              <input className="auth-type" type = "text" required/>

          <div className="form-label">Password</div>
              <input className="auth-type" type = "password" required/>

          <div className="button-set">
            <button className="login-btn">Login</button>
            <button className="reg-btn">Register</button>
          </div>
          
        </form>
        </div>
      </div>
    );
  }
}
