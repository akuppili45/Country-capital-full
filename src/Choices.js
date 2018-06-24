import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Choices extends Component {
  constructor(props){
    super(props);
    this.state = {selectedOption: ''};
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
        console.log('Correct!')
    }
    else{
        console.log('Wrong!');
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
      </div>
    );
  }
}
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {selectedOption: ''};
//     this.handleRadioChange = this.handleRadioChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleRadioChange(e){
//     this.setState({selectedOption: e.target.value});
//   }
//   handleSubmit(e){
//     e.preventDefault();
//     console.log(`You have selected ${this.state.selectedOption}`);

//   }
//   render() {
//     return (
//       <div className="App">
//        <form>
//          <label>
//            <input type='radio' value='option 1' checked={this.state.selectedOption === 'option 1'} onChange={this.handleRadioChange}/>
//            Option 1
//          </label>
//          <label>
//            <input type='radio' value='option 2' checked={this.state.selectedOption === 'option 2'} onChange={this.handleRadioChange}/>
//            Option 2
//          </label>
//          <label>
//            <input type='radio' value='option 3' checked={this.state.selectedOption === 'option 3'} onChange={this.handleRadioChange}/>
//            Option 3
//          </label>
//          <label>
//            <input type='radio' value='option 4' checked={this.state.selectedOption === 'option 4'} onChange={this.handleRadioChange}/>
//            Option 4
//          </label>
//          <button onClick={this.handleSubmit}>Submit</button>
//        </form>
//       </div>
//     );
//   }
// }

export default Choices;
