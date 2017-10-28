import React, { Component } from 'react';
import Header from './Header';
import Register from './dashboard_comp/Register';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="form-body">
        <Register />
        </div>
      </div>
    );
  }
}
