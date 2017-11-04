import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import { Link, Route } from 'react-router-dom';
import { POST_NEW_PROPERTY } from '../../actions/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Wizard1 extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.POST_NEW_PROPERTY({ name: this.refs.propertyName.value, description: this.refs.propertyDescription.value}, false);
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
                ref="propertyName"
                className="wizard-input-long"
                id="propertyName"
                type="text" 
                value={this.state.propertyName}
                onChange={this.handleInputChange}
                required
              />

          <div className="form-label">Property Description</div>
              <textarea rows="4"
                ref="propertyDescription"  
                className="wizard-input-big" 
                id="propertyDescription"
                type="text"
                value={this.state.propertyDescription}
                onChange={this.handleInputChange}
                required
                />
        

        <div className="step__btn_container">
        <button type="submit" onClick={() => {this.submit()}} className="drk-btn" ><Link to="/wizard/2"> Next Step</Link> </button>
        </div>

        
        </form>
        </div>
        
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ POST_NEW_PROPERTY}, dispatch)
}


export default connect(null, mapDispatchToProps)(Wizard1);
