import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <form>
        <div className="form-reg-body">
        <button className="add-property-btn"><Link to="/wizard/1"> Add new property </Link></button>
          <div className="filter-container">
            <p> List properties with "desired rent" greater than: $ </p><input type ="number" placeholder="0" required/>
            <button className="filter-btn">Filter</button>
            <button className="reset-btn"> Reset </button>
          </div>
          <span className="divider"> </span>
          <p>Home Listings</p>
        </div>
        </form>
      </div>
    );
  }
}