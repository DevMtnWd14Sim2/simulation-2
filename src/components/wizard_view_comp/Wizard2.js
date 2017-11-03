import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { withRouter, Link } from 'react-router-dom';

class Wizard2 extends React.Component {
  constructor(){
    super()
    this.state = {
      address: "",
      city: "",
      State: "",
      zip: ""
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleNext(e){
    e.preventDefault()
    this.props.history.push("/wizard/3")
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
        <span className="step-tag"> Step 2 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img className="animateOrb" src ={StepProgress1} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
        </div>
        <form onSubmit={this.handleNext}>
        <div className="form-label">Address</div>
              <input 
                className="wizard-input-long" 
                id="address"
                type = "text" 
                value={this.state.address}
                onChange={this.handleInputChange}
                required
              />

        <div className="form-label-combined">
          <div className="form-input-container">
            <div className="form-label">City</div>
            <input 
              className="wizard-input-short" 
              id="city"
              type="text" 
              value={this.state.city}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-input-container">
            <div className="form-label">State</div>
            <input 
              className="wizard-input-short" 
              id="State"
              type="text"
              value={this.state.State}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </div>  

 
        <div className="form-label">Zip</div>
              <input 
                className="wizard-input-short"
                id="zip"
                type="number" 
                value={this.state.zip}
                onChange={this.handleInputChange}
                required
                />   
        <div className="step__btn_container">
            <Link to="/wizard/1"><button type="submit" className="drk-btn">Previous Step</button></Link>
            <button type="submit" className="drk-btn"> Next Step</button>
        </div>
             
        </form>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Wizard2);