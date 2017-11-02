import React, { Component } from 'react';
import AuthView from './components/AuthView';
import Dashboard from './components/Dashboard';
import WizardView from './components/WizardView';
import logo from './logo.svg';
import './css/styles.css';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={ AuthView } path="/" exact />
          <Route component={ Dashboard } path="/dashboard" />
          <Route component={ WizardView } path="/wizard/" />
        </Switch>
      </div>
    );
  }
}

export default App;
