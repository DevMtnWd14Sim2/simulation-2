import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import { withRouter } from 'react-router-dom';

class Wizard1 extends React.Component {
  constructor(){
    super()
    this.state = {
      propertyName: "",
      propertyDescription: ""
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleNext(e){
    e.preventDefault()
    this.props.history.push("/wizard/2")
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
        <span className="step-tag"> Step 1 </span>
        <div className="StepHighlight__container">
          <img className="animateOrb" src ={StepProgress1} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
        </div>
        <form onSubmit={this.handleNext}>
          <div className="form-label">Property Name</div>
              <input 
                className="wizard-input-long"
                id="propertyName"
                type="text" 
                value={this.state.propertyName}
                onChange={this.handleInputChange}
                required
              />

          <div className="form-label">Property Description</div>
              <input 
                className="wizard-input-big" 
                id="propertyDescription"
                type="text"
                value={this.state.propertyDescription}
                onChange={this.handleInputChange}
                required
                />
        

        <div className="step__btn_container">
            <button type="submit" className="drk-btn" >Next Step</button>
        </div>

        
        </form>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Wizard1);
