import { connect } from "react-redux";
import Question from "../components/Question";
import {changeGameMode} from '../actions';
const mapStateToProps = state => ({questions: state.showData, currentQuestion: state.showCurrentQuestion, question: state.showData[state.showCurrentQuestion].question});
const mapDispatchToProps = dispatch => ({changeGameMode: gameMode => {dispatch(changeGameMode(gameMode))}});
// const mapDispatchToProps = dispatch => 

export default connect(mapStateToProps, mapDispatchToProps)(Question);

