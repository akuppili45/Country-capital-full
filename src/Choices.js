import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Choices extends Component {
  constructor(props){
    super(props);
    this.state = {selectedOption: '', numberCorrect: 0};
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRadioChange(e){
    this.setState({selectedOption: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(`You have selected ${this.state.selectedOption}`);
    //this.props.compareValue should be target capital in App.js
    if(this.props.compareValue === this.state.selectedOption){
        this.setState({numberCorrect: this.state.numberCorrect + 1});
    }
    
  }
  render() {
    return (
      <div className="App">
         <h1>{this.props.question}</h1>
         <label>
           <input type='radio' value={this.props.firstValue} checked={this.state.selectedOption === this.props.firstValue} onChange={this.handleRadioChange}/>
           {this.props.firstValue}
         </label>
         <label>
           <input type='radio' value={this.props.secondValue} checked={this.state.selectedOption === this.props.secondValue} onChange={this.handleRadioChange}/>
           {this.props.secondValue}
         </label>
         <label>
           <input type='radio' value={this.props.thirdValue} checked={this.state.selectedOption === this.props.thirdValue} onChange={this.handleRadioChange}/>
           {this.props.thirdValue}
         </label>
         <label>
           <input type='radio' value={this.props.fourthValue} checked={this.state.selectedOption === this.props.fourthValue} onChange={this.handleRadioChange}/>
           {this.props.fourthValue}
         </label>
         <button onClick={this.handleSubmit}>Submit</button>
         <div>{this.state.numberCorrect}</div>
      </div>
    );
  }
}

export default Choices;
