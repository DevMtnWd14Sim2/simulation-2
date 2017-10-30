import React, { Component } from 'react';
import Header from './Header';
import Register from './dashboard_comp/Register';
import { HashRouter, Switch, Route } from 'react-router-dom';


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
