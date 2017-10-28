import React, { Component } from 'react';

export default class AuthView extends React.Component {
  render() {
    return (
      <div className="auth-view-container">
        <h2> AuthView Component </h2>
        <form>
          <div className="auth-title-tag">Username</div>
              <input className="auth-type" type = "text" />

          <div className="auth-title-tag">Password</div>
              <input className="auth-type" type = "password" />

          <div className="button-set">
            <button className="login-btn">Login</button>
            <button className="reg-btn">Register </button>
          </div>
          
        </form>
      </div>
    );
  }
}
