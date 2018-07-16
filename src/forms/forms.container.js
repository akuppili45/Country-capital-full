import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from './forms.component';
import { connect } from 'react-redux';
import {addPoint, goToNextQuestion} from '../actions';
let FormContainer = props => {
    const submitForm = formValues => {
        if(props.answerIsCorrect){
            console.log("the answer is deffinetley correct")
        }
        props.goNext(props.currentQuestion)
    };
    return <FormComponent onSubmit={submitForm} handleSubmit={props.handleSubmit} choices={props.choices} score={props.currentScore}/>;
};
const mapStateToProps = state => {
    const valuesExists = state.form.hasOwnProperty('myForm') && state.form.myForm.hasOwnProperty('values') && state.form.myForm.hasOwnProperty('submitSucceeded');
    return {
        choices: state.showData[state.showCurrentQuestion].allChoices, 
        answerIsCorrect: valuesExists ? state.form.myForm.values.answerChosen === state.showData[state.showCurrentQuestion].answer : false,
        currentQuestion: state.showCurrentQuestion,
        currentScore: state.showScore
    }
};
const mapDispatchToProps = dispatch => ({addPoint: score => dispatch(addPoint(score)), goNext: questionNum => dispatch(goToNextQuestion(questionNum))});
FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormContainer);

export default reduxForm({ form: "myForm" })(FormContainer);
