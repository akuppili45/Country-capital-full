import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './Choices';
import Question from './Question';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Question />
      </div>
    );
  }
}

export default App;
