import React, { Component } from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <header><div className="header-title"> <div className="houser-tag">Houser</div> <div className="dash-tag">Dashboard</div> </div>  <a href ="#"> Logout </a></header>
      </div>
    );
  }
}