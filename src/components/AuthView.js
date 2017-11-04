import React, { Component } from 'react';

import AuthLogo from '../img/svg/houser-auth-logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_LOGIN } from '../actions/action';


import { authenticateUser,  registerUser } from '../services/auth.services';

 class AuthView extends Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.GET_LOGIN(this.refs.username.value, this.refs.password.value);
  }


  render() {
    return (
      <div className="auth-view-container">
        <div className="form-body-auth">
        <img className="auth-logo" src={AuthLogo} />
        <form>
          <div className="form-label">Username</div>
              <input ref="username"  className="auth-type" type = "text" required/>

          <div className="form-label">Password</div>
              <input ref="password" className="auth-type" type = "password" required/>

          <div className="button-set">
            <button onClick={() => {this.submit()}} className="login-btn"><Link to="/dashboard">Login</Link></button>
            <button className="reg-btn"><Link to="/dashboard">Register</Link> </button>
          </div>
          
        </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ userNamePassword }) {
  return { userNamePassword };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ GET_LOGIN }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthView);