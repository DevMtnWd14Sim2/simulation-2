import React, { Component } from 'react';
import AuthLogo from '../img/svg/houser-auth-logo.svg';
import { Link } from 'react-router-dom';

export default class AuthView extends React.Component {
  render() {
    return (
      <div className="auth-view-container">
        <div className="form-body-auth">
        <img className="auth-logo" src={AuthLogo} />
        <form>
          <div className="form-label">Username</div>
              <input className="auth-type" type = "text" />

          <div className="form-label">Password</div>
              <input className="auth-type" type = "password" />

          <div className="button-set">
            <button className="login-btn"><Link to="/dashboard">Login</Link></button>
            <button className="reg-btn"><Link to="/dashboard">Register</Link> </button>
          </div>
          
        </form>
        </div>
      </div>
    );
  }
}
