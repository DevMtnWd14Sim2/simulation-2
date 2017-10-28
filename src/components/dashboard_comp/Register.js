import React, { Component } from 'react';

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <div className="form-reg-body">
          <button className="btn-light"> Add new property</button>
          <div className="desired-rent"><p> List properties with "desired rent" greater than: $ </p><input type ="number" placeholder="0" /></div>
          <span className="divider"> </span>
          <p>Home Listings</p>
        </div>
      </div>
    );
  }
}