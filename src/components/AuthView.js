import React, { Component } from 'react';

import AuthLogo from '../img/svg/houser-auth-logo.svg';
import { Link } from 'react-router-dom';

import { authenticateUser,  registerUser } from '../services/auth.services';


export default class AuthView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'darthvader@yahoo.com',
      password: 'deathstarrox'
    };
    this.login = this.login.bind(this);
  }

  login() {
    const userObject = {...this.state};
    authenticateUser(userObject)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.history.push('/dashboard');
        }
        return res;
      })
      .catch(err => {
        console.error('login was NOT successful');
        throw err;
      });
  }

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
            <span className="login-btn" onClick={this.login}>Login</span>
            <button className="reg-btn">Register</button>
          </div>
          
        </form>
        </div>
      </div>
    );
  }
}
