import React, { Component } from 'react';
import { connect } from "react-redux";
import { requestCountries, receiveCountries, fetchCountries, changeGameMode, GAME_MODE } from '../actions';
import { Link } from "react-router-dom";
//only thing to dispatch is the mode of the game don't think about flag to country yet
class App extends Component {
  componentWillMount(){
    const { selectedGameMode, dispatch } = this.props;
    dispatch(fetchCountries(selectedGameMode));
  }
  render() {
    return (
      <div>
        {/* <button onClick={() => dispatch(changeGameMode(GAME_MODE.COUNTRY_TO_CAPITAL))}>Start</button> */}
        <Link to="/question">Start</Link>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
