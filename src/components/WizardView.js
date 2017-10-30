import React, { Component } from 'react';
import Header from './Header'
import Wizard1 from './wizard_view_comp/Wizard1';

export default class WizardView extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
        <Header />
        <h2> Add new listing </h2>
        <Wizard1 />
        
        
        
      </div>
    );
  }
}
