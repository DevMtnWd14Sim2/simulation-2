import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';
import { POST_NEW_PROPERTY } from '../../actions/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Wizard3 extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.POST_NEW_PROPERTY({ 
      image_url: this.refs.imageUrl.value, 
    }, false);
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
        <form>
        

        <div className="preview-image">
            Preview
        </div>
        
        <div className="form-label">Image URL</div>
        <input ref="imageUrl" className="wizard-input-long" type = "text" required/>
        <div className="form-label">Upload Picture</div>
        

<input type="file" name="datafile" size="40" /> 




        
        <div className="step__btn_container">
            <button className="drk-btn"><Link to="/wizard/2"> Previous Step </Link> </button>
            <button onClick={() => {this.submit()}} className="drk-btn"><Link to="/wizard/4"> Next Step </Link> </button>
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


export default connect(null, mapDispatchToProps)(Wizard3);