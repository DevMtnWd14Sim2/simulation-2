import React, { Component } from 'react';
import Header from './Header'
import Wizard1 from './wizard_view_comp/Wizard1';
import Wizard2 from './wizard_view_comp/Wizard2';
import Wizard3 from './wizard_view_comp/Wizard3';
import Wizard4 from './wizard_view_comp/Wizard4';
import Wizard5 from './wizard_view_comp/Wizard5';
import {Route, Switch, HashRouter, BrowserRouter, Link} from 'react-router-dom';

export default class WizardView extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
        <Header />
        <div className="form-body">
        <div className="step-header"> <h2> Add new listing </h2> <button className="cancel-btn"><Link to="/dashboard/">Cancel </Link></button> </div>
        
        <Switch>
          <Route component={ Wizard1 } path="/wizard/1" exact />
          <Route component={ Wizard2 } path="/wizard/2" />
          <Route component={ Wizard3 } path="/wizard/3" />
          <Route component={ Wizard4 } path="/wizard/4" />
          <Route component={ Wizard5 } path="/wizard/5" />
        </Switch>
       
        </div>
      </div>
    );
  }
}
