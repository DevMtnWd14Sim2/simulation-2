import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';

export default class Wizard2 extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
         <div className="input-container">
        <span className="step-tag"> Step 2 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img src ={StepProgress1} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
        </div>
        <form>
        <div className="form-label">Address</div>
              <input className="wizard-input-long" type = "text" />

        <div className="form-label-combined">
        <label>City</label><input className="wizard-input-short" type = "text" />
        <label>State</label> <input className="wizard-input-short" type = "text" />  
        </div>   
        <div className="form-label">Zip</div>
              <input className="wizard-input-short" type = "text" />   
        <div className="step__btn_container">
            <button><Link to="/wizard/1"> Previous Step </Link> </button>
            <button><Link to="/wizard/3"> Next Step </Link> </button>
        </div>
             
        </form>
        </div>
        
      </div>
    );
  }
}