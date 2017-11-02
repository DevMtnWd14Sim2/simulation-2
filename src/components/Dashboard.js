import React, { Component } from 'react';
import Header from './Header';
import Register from './dashboard_comp/Register';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


// import { getAllProperties, filterProperties, deleteProperty } from '../services/dashboard.services';


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

function mapStateToProps(state) {
  return { state };
}