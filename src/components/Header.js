import React, { Component } from 'react';
import DashboardLogo from '../img/svg/houser-dashboard-logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <header><img className="header-title" src={DashboardLogo} />   <a><Link to="/"> Logout </Link> </a></header>
      </div>
    );
  }
}