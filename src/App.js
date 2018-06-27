import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './Choices';
import CountryToCapital from './CountryToCapital';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {mode: ''};
  }
  render() {
    if(this.state.mode === 'Country-Capital'){
      return (
        <div className="App">
          <CountryToCapital />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Welcome to the Country Guessing Game!!</h1>
        <button onClick={() => this.setState({mode: 'Country-Capital'})}>Country-Capital</button>
      </div>
    );
  }
}

export default App;
