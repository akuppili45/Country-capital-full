import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './Choices';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {countryChoices: [], targetCountry: {}};
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
          let randomIndexes = [];
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
  render() {
    if(this.state.countryChoices.length != 0){
      return (
        <div className="App">
          <form>
            <Choices firstValue={this.state.countryChoices[0].capital} secondValue={this.state.countryChoices[1].capital} thirdValue={this.state.countryChoices[2].capital} fourthValue={this.state.countryChoices[3].capital} compareValue={this.state.targetCountry.capital} question={this.state.targetCountry.country} />
            {/* <Choices firstValue={this.state.countryChoices[0].country} secondValue={this.state.countryChoices[1].country} thirdValue={this.state.countryChoices[2].country} fourthValue={this.state.countryChoices[3].country} compareValue={this.state.targetCountry.capital}/> */}
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

export default App;
