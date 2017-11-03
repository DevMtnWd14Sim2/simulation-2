import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, withRouter } from 'react-router-dom';

class Wizard3 extends React.Component {
  constructor(){
    super()
    this.state = {
      imageURL: ""
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleNext(e){
    e.preventDefault()
    this.props.history.push("/wizard/4")
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
        <span className="step-tag"> Step 3 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img className="animateOrb" src ={StepProgress1} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
        </div>
        <form onSubmit={this.handleNext}>
        

        <div className="preview-image">
            Preview
        </div>
        
        <div className="form-label">Image URL</div>
        <input 
          className="wizard-input-long" 
          id="imageURL"
          value={this.state.imageURL}
          onChange={this.handleInputChange}
          type = "text" 
          required
        />
        <div className="form-label">Upload Picture</div>
        

        <input type="file" 
          name="datafile" 
          size="40" 
        /> 




        
        <div className="step__btn_container">
            <Link to="/wizard/2"><button className="drk-btn"> Previous Step </button></Link> 
            <button className="drk-btn">Next Step</button>
        </div>
             
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Wizard3)