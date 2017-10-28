import React, { Component } from 'react';
import AuthView from './components/AuthView';
import Dashboard from './components/Dashboard';
import WizardView from './components/Dashboard';
import logo from './logo.svg';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
