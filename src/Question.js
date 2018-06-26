import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './Choices';
class Question extends Component {
  constructor(props){
    super(props);
    this.state = {selectedOption: '', numberCorrect: 0, questionSet: [], countryChoices: [], targetCountry: {}};
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all').then(results => results.json())//returns promise but don't console.log anything here or you can't access the array inside in the next .then chain
      .then(data => {
          let choices = [];
            //Array of objects of {country: , capital: , flag: 
          //get data and transform them to objects of {country: , capital: , flag: }
          let countryData = Array(data.length).fill().map((apiObj, index) => {
            let countryName = data[index].name;
            let capitalName = data[index].capital;
            let flagImg = data[index].flag;
            let finalObj = {country: countryName, capital: capitalName, flag: flagImg};
            return finalObj;
          });
          //Array of random indexes to point to 4 random integer values
          let randomIndexes = [];
          //fill array randomIndexes with 4 random integers that are different
          while(randomIndexes.length < 4){
            let randomNumber = Math.floor(Math.random() * countryData.length);
            if(randomIndexes.indexOf(randomNumber) > -1){
              continue;
            }
            randomIndexes[randomIndexes.length] = randomNumber;
          }
          choices = Array(randomIndexes.length).fill().map((value, index) => {
            return countryData[randomIndexes[index]];
          });
          let target = choices[Math.floor(Math.random() * choices.length)];
          let newState = {countryChoices: choices, targetCountry: target};
          this.setState(newState);
      });
  }
  handleRadioChange(e){
    this.setState({selectedOption: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(`You have selected ${this.state.selectedOption}`);
    //this.props.compareValue should be target capital in App.js
    if(this.state.targetCountry.capital === this.state.selectedOption){
        this.setState({numberCorrect: this.state.numberCorrect + 1});
    }
    
  }
  render() {
    if(this.state.countryChoices.length != 0){
      return (
        <div className="App">
          <form>
          <h1>{this.state.targetCountry.country}</h1>
         <label>
           <input type='radio' value={this.state.countryChoices[0].capital} checked={this.state.selectedOption === this.state.countryChoices[0].capital} onChange={this.handleRadioChange}/>
           {this.state.countryChoices[0].capital}
         </label>
         <label>
           <input type='radio' value={this.state.countryChoices[1].capital} checked={this.state.selectedOption === this.state.countryChoices[1].capital} onChange={this.handleRadioChange}/>
           {this.state.countryChoices[1].capital}
         </label>
         <label>
           <input type='radio' value={this.state.countryChoices[2].capital} checked={this.state.selectedOption === this.state.countryChoices[2].capital} onChange={this.handleRadioChange}/>
           {this.state.countryChoices[2].capital}
         </label>
         <label>
           <input type='radio' value={this.state.countryChoices[3].capital} checked={this.state.selectedOption === this.state.countryChoices[3].capital} onChange={this.handleRadioChange}/>
           {this.state.countryChoices[3].capital}
         </label>
         <button onClick={this.handleSubmit}>Submit</button>
         <div>{this.state.numberCorrect}</div>
            {/* <Choices firstValue={this.state.countryChoices[0].capital} secondValue={this.state.countryChoices[1].capital} thirdValue={this.state.countryChoices[2].capital} fourthValue={this.state.countryChoices[3].capital} compareValue={this.state.targetCountry.capital} question={this.state.targetCountry.country} /> */}
          </form>
        </div>
      );
    }
    return (
      <div className="App">

      </div>
    );
  }
}

export default Question;
