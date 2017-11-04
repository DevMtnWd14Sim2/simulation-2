import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';
import { POST_NEW_PROPERTY } from '../../actions/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Wizard5 extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      desiredRent: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submit(e) {
    
    this.props.POST_NEW_PROPERTY({ 
      desired_rent: this.refs.rent.value, 
    }, true);
  }

  handleInputChange(e) {
    e.preventDefault()
    const key = e.target.id
    const value = e.target.value
    this.setState({
      [key]: value
    });
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
                ref="rent"
                className="wizard-input-long" 
                type = "number" 
                id="desiredRent"
                value={this.state.desiredRent}
                onChange={this.handleInputChange}
                required
                />
       
        <div className="step__btn_container">
            <Link to="/wizard/4"><button className="drk-btn"> Previous Step  </button></Link>
            <button type="submit" onClick={() => {this.submit()}} className="light-btn"><Link to="/dashboard"> Complete </Link> </button>
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

export default connect(null, mapDispatchToProps)(Wizard5);
