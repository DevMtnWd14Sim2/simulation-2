import React, { Component } from 'react';
import DashboardLogo from '../img/svg/houser-dashboard-logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <header><img className="header-title" src={DashboardLogo} />   <a href ="#"> Logout </a></header>
      </div>
    );
  }
}