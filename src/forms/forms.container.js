import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from './forms.component';
import { connect } from 'react-redux';
import {addPoint, goToNextQuestion} from '../actions';
let FormContainer = props => {
    // const rightAnswers;
    // const pickedAnswers = ;
    const submitForm = formValues => {
        console.log(props.pickedAnswers)
    };
    // console.log(props)
    return <FormComponent onSubmit={submitForm} handleSubmit={props.handleSubmit} questions={props.questions}/>;
    // return <div></div>
};
const mapStateToProps = state => {
    return {
        questions: state.showData,
        pickedAnswers: state.form !== {} ? Object.values(state.form.myForm.values) : []
    }
};
const mapDispatchToProps = dispatch => ({addPoint: score => dispatch(addPoint(score)), goNext: questionNum => dispatch(goToNextQuestion(questionNum)), clear: form => dispatch()});
FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormContainer);

export default reduxForm({ form: "myForm" })(FormContainer);
