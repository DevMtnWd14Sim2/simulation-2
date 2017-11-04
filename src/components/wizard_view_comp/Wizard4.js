import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, withRouter } from 'react-router-dom';

class Wizard4 extends React.Component {
  constructor(){
    super()
    this.state = {
      loanAmount: "",
      monthlyMortage: ""
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleNext(e){
    e.preventDefault()
    this.props.history.push("/wizard/5")
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
        <span className="step-tag"> Step 4 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img className="animateOrb" src ={StepProgress1} />
          <img src ={StepProgress0} />
        </div>
        <form onSubmit={this.handleNext}>
        

        <div className="form-label">Loan Amount</div>
              <input 
                className="wizard-input-long"
                id="loanAmount"
                type = "number"
                value={this.state.loanAmount}
                onChange={this.handleInputChange}
                required
              />

        <div className="form-label">Monthly Mortage</div>
              <input 
                className="wizard-input-long" 
                id="monthlyMortage"
                type = "number"
                value={this.state.monthlyMortage} 
                onChange={this.handleInputChange}
                required
              />



        
        <div className="step__btn_container">
            <Link to="/wizard/3"><button className="drk-btn">Previous Step</button></Link>
            <button type="submit" className="drk-btn"> Next Step </button>
        </div>
             
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Wizard4)