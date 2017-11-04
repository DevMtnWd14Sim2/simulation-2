import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';
import { POST_NEW_PROPERTY } from '../../actions/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Wizard4 extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.POST_NEW_PROPERTY({ 
      loan_amnt: this.refs.loanAmount.value, 
      month_mortgage: this.refs.mortgage.value
    }, false);
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
                ref="loanAmount"
                className="wizard-input-long"
                id="loanAmount"
                type = "number"
                value={this.state.loanAmount}
                onChange={this.handleInputChange}
                required
              />

        <div className="form-label">Monthly Mortage</div>
              <input 
                ref="mortgage"
                className="wizard-input-long" 
                id="monthlyMortage"
                type = "number"
                value={this.state.monthlyMortage} 
                onChange={this.handleInputChange}
                required
              />
        
        <div className="step__btn_container">
            <Link to="/wizard/3"><button className="drk-btn">Previous Step</button></Link>
            <button type="submit" onClick={() => {this.submit()}} className="drk-btn"><Link to="/wizard/5"> Next Step </Link> </button>
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

export default connect(null, mapDispatchToProps)(Wizard4);
