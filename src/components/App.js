import React, { Component } from 'react';
import { connect } from "react-redux";
import { requestCountries, receiveCountries, fetchCountries, changeGameMode, GAME_MODE } from '../actions';
//only thing to dispatch is the mode of the game don't think about flag to country yet
class App extends Component {
  // componentWillMount(){
  //   const { selectedGameMode, dispatch } = this.props;
  //   dispatch(fetchCountries(selectedGameMode));
  // }
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <button onClick={() => dispatch(changeGameMode(GAME_MODE.COUNTRY_TO_CAPITAL))}>Start</button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
