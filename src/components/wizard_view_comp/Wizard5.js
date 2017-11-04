import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, withRouter } from 'react-router-dom';

class Wizard5 extends React.Component {
  constructor(){
    super()
    this.state = {
      desiredRent: ""
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleNext(e){
    e.preventDefault()
    this.props.history.push("/dashboard")
    console.log(this.props.history)
  }

  handleInputChange(e){
    e.preventDefault()  
    const key = e.target.id 
    const value = e.target.value
    this.setState({
      [key]: value
    })
    console.log(this.state)
    
  }
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
        <form onSubmit={this.handleNext}>
        

        <div className="form-label">Desired Rent</div>
              <input 
                className="wizard-input-long" 
                type = "number" 
                id="desiredRent"
                value={this.state.desiredRent}
                onChange={this.handleInputChange}
                required
                />



        
        <div className="step__btn_container">
            <Link to="/wizard/4"><button className="drk-btn"> Previous Step  </button></Link>
            <button type="submit" className="light-btn">Complete</button>
        </div>
             
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Wizard5);