import React, { Component } from 'react';
import AuthLogo from '../img/svg/houser-auth-logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_LOGIN } from '../actions/action';
import { Link, withRouter } from 'react-router-dom';
// import { authenticateUser,  registerUser } from '../services/auth.services';

 class AuthView extends Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.GET_LOGIN(this.refs.username.value, this.refs.password.value);
  }



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
                ref="username"
                id="username"
                value={this.state.username}
                className="auth-type" 
                type = "text" 
                required
                onChange={this.handleInputChange}
              />

          <div className="form-label">Password</div>
              <input 
                ref="password"
                id="password"
                value={this.state.password}
                className="auth-type" 
                type="password" 
                required
                onChange={this.handleInputChange}
              />

          <div className="button-set">
          <button type='submit' onClick={() => {this.submit()}} className="login-btn"><Link to="/dashboard">Login</Link></button>
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
