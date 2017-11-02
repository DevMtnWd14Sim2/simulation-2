import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';

export default class Wizard5 extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
        <div className="input-container">
        <span className="step-tag"> Step 5 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img className="animateOrb" src ={StepProgress1} />
        </div>
        <form>
        

        <div className="form-label">Desired Rent</div>
              <input className="wizard-input-long" type = "text" required/>



        
        <div className="step__btn_container">
            <button className="drk-btn"><Link to="/wizard/4"> Previous Step </Link> </button>
            <button className="light-btn"><Link to="/dashboard"> Complete </Link> </button>
        </div>
             
        </form>
        </div>
      </div>
    );
  }
}