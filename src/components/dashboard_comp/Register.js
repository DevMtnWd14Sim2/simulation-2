import React, { Component } from 'react';

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <p> List properties with "desired rent" greater than: $ </p>
        <input type ="number" placeholder="0" />
      </div>
    );
  }
}