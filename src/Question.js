import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './Choices';
import shuffle from 'shuffle-array';
class Question extends Component {
  constructor(props){
    super(props);
    this.state = {questionSetIndex: 0, selectedOption: '', numberCorrect: 0, questionSet: [], countryChoices: [], targetCountry: {}, possibleAnswerChoices: [], rightAnswer: '', question: ''};
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
          countryData = shuffle(countryData);
          let fullQuestions = Array(10).fill().map((value, index) => {
            if(index != 0){
              return {possibleAnswers: [countryData[index*10].capital, countryData[index*10+1].capital, countryData[index*10+2].capital, countryData[index].capital], rightAnswer: countryData[index].capital, quest: countryData[index].country};
            }
            else{
              return {possibleAnswers: [countryData[index+100].capital, countryData[index+101].capital, countryData[index+102].capital, countryData[index].capital], rightAnswer: countryData[index].capital, quest: countryData[index].country};
            }
          });
          let setOfQuestionsObj = {questionSet: fullQuestions, possibleAnswerChoices: shuffle(fullQuestions[this.state.questionSetIndex].possibleAnswers), rightAnswer: fullQuestions[this.state.questionSetIndex].rightAnswer, question: fullQuestions[this.state.questionSetIndex].quest};
          this.setState(setOfQuestionsObj);
          console.log(this.state);
          // let question = {choices1: [], quesAns: {}};//later change to array
          // //Array of random indexes to point to 4 random integer values
          // let randomIndexes = [];
          // //fill array randomIndexes with 4 random integers that are different
          // while(randomIndexes.length < 4){
          //   let randomNumber = Math.floor(Math.random() * countryData.length);
          //   if(randomIndexes.indexOf(randomNumber) > -1){
          //     continue;
          //   }
          //   randomIndexes[randomIndexes.length] = randomNumber;
          // }
          // choices = Array(randomIndexes.length).fill().map((value, index) => {
          //   return countryData[randomIndexes[index]];
          // });
          // console.log(choices);
          // let target = choices[Math.floor(Math.random() * choices.length)];
          // console.log(target);
          // question = {choices1: choices, quesAns: target};
          // let newState = {countryChoices: question.choices1, targetCountry: question.quesAns};
          // this.setState(newState);
          // console.log(this.state);
      });
  }
  handleRadioChange(e){
    this.setState({selectedOption: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(`You have selected ${this.state.selectedOption}`);
    //this.props.compareValue should be target capital in App.js
    // if(this.state.targetCountry.capital === this.state.selectedOption){
    //     this.setState({numberCorrect: this.state.numberCorrect + 1});
    // }
    //this.setState({questionSetIndex: this.state.questionSetIndex + 1, possibleAnswerChoices: this.state.questionSet[this.state.questionSetIndex+1].possibleAnswers, rightAnswer: this.state.questionSet[this.state.questionSetIndex+1].rightAnswer});
    
    let newState = {questionSetIndex: this.state.questionSetIndex + 1, possibleAnswerChoices: this.state.questionSet[this.state.questionSetIndex+1].possibleAnswers, rightAnswer: this.state.questionSet[this.state.questionSetIndex+1].rightAnswer, question: this.state.questionSet[this.state.questionSetIndex+1].quest};
    if(this.state.selectedOption === this.state.rightAnswer){
      newState = {numberCorrect: this.state.numberCorrect + 1, questionSetIndex: this.state.questionSetIndex + 1, possibleAnswerChoices: this.state.questionSet[this.state.questionSetIndex+1].possibleAnswers, rightAnswer: this.state.questionSet[this.state.questionSetIndex+1].rightAnswer, question: this.state.questionSet[this.state.questionSetIndex+1].quest};
    }
    this.setState(newState);
    
  }
  render() {
    if(this.state.possibleAnswerChoices.length != 0){
      return (
        <div className="App">
          <form>
          <h1>{this.state.question}</h1>
         <label>
           <input type='radio' value={this.state.possibleAnswerChoices[0]} checked={this.state.selectedOption === this.state.possibleAnswerChoices[0]} onChange={this.handleRadioChange}/>
           {this.state.possibleAnswerChoices[0]}
         </label>
         <label>
           <input type='radio' value={this.state.possibleAnswerChoices[1]} checked={this.state.selectedOption === this.state.possibleAnswerChoices[1]} onChange={this.handleRadioChange}/>
           {this.state.possibleAnswerChoices[1]}
         </label>
         <label>
           <input type='radio' value={this.state.possibleAnswerChoices[2]} checked={this.state.selectedOption === this.state.possibleAnswerChoices[2]} onChange={this.handleRadioChange}/>
           {this.state.possibleAnswerChoices[2]}
         </label>
         <label>
           <input type='radio' value={this.state.possibleAnswerChoices[3]} checked={this.state.selectedOption === this.state.possibleAnswerChoices[3]} onChange={this.handleRadioChange}/>
           {this.state.possibleAnswerChoices[3]}
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
