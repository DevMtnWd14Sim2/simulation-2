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
          
          <div className="home-list-container">
              <p className="form-label">Home Listings</p>
              <div className="home-listing">
              <div className="property-picture"> </div>
              <div className="property-name"> 
                <p>Name</p>
                <p>"Sed ut perspiciatis unde omnis iste natus  </p>
              </div>
              <div className="property-name"> 
              </div>
              <span className="divider-listing"> </span>
              <div className="property-value">
                
                  <label>Loan:</label>
                  <label>Monthly Mortgage:</label>
                  <label>Recommended Rent:</label>
                  <label>Desired Rent:</label>
                  <label>Address:</label>
                  <label>City:</label>
                
              </div>
              </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}