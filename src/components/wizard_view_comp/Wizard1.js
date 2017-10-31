import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import { Link, Route } from 'react-router-dom';

export default class Wizard1 extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
        <div className="input-container">
        <span className="step-tag"> Step 1 </span>
        <div className="StepHighlight__container">
          <img className="animateOrb" src ={StepProgress1} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
        </div>
        <form>
          <div className="form-label">Property Name</div>
              <input className="wizard-input-long" type = "text" required/>

          <div className="form-label">Property Description</div>
              <input className="wizard-input-big" type = "text" required/>
        

        <div className="step__btn_container">
            <button className="drk-btn" ><Link to="/wizard/2"> Next Step</Link> </button>
        </div>

        
        </form>
        </div>
        
      </div>
    );
  }
}
