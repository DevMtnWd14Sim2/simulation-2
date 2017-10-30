import React, { Component } from 'react';
import Header from './Header'

export default class Wizard1 extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
        <Header />
        <h2> Wizard1 </h2>
        <form>
          <div className="property-name-tag">Property Name</div>
              <input className="wizard1-type" type = "text" />

          <div className="property-desc-tag">Property Description</div>
          <input className="wizard1-type" type = "text" />
        </form>
        
      </div>
    );
  }
}
