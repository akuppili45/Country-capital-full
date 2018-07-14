import { connect } from "react-redux";
import Question from "../components/Question";

const mapStateToProps = state => ({questions: state.showData, currentQuestion: state.showCurrentQuestion, question: state.showData[state.showCurrentQuestion].question});

// const mapDispatchToProps = dispatch => 

export default connect(mapStateToProps)(Question);

