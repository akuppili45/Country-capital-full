import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './Choices';
import CountryToCapital from './CountryToCapital';
import FlagToCountry from './FlagToCountry';
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
    else if(this.state.mode === 'Flag-Country'){
      return (
        <div className="App">
          <FlagToCountry />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Welcome to the Country Guessing Game!!</h1>
        <button onClick={() => this.setState({mode: 'Country-Capital'})}>Country-Capital</button>
        <button onClick={() => this.setState({mode: 'Flag-Country'})}>Flag-Country</button>
      </div>
    );
  }
}

export default App;
