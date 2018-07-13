import React, { Component } from 'react';
import { connect } from "react-redux";
import CountryToCapital from './CountryToCapital';
import { requestCountries, receiveCountries, fetchCountries } from './actions';
class App extends Component {
  componentWillMount(){
    const { selectedGameMode, dispatch } = this.props;
    dispatch(fetchCountries(selectedGameMode));
  }
  render() {
    const { showData } = this.props;
    if(showData.length != 0 ){
      return(
        <h1>{showData[0].question}</h1>
      );
    }
    return (
      <div></div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
