import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from './forms.component';
import { connect } from 'react-redux';
import {addPoint, goToNextQuestion} from '../actions';
let FormContainer = props => {
    // const rightAnswers;
    // const pickedAnswers = ;
    const submitForm = formValues => {
        const { pickedAnswers } = props;
        const { questions } = props;
        const correctAnswers = questions.map(content => content.answer);
        console.log(correctAnswers)
        console.log(pickedAnswers)
    };
    // console.log(props)
    return <FormComponent onSubmit={submitForm} handleSubmit={props.handleSubmit} questions={props.questions}/>;
    // return <div></div>
};
const mapStateToProps = state => {
    const valuesExists = state.form.hasOwnProperty('myForm') && state.form.myForm.hasOwnProperty('values') && Object.values(state.form.myForm.values).length === 10;
    return {
        questions: state.showData,
        pickedAnswers: valuesExists ? Object.values(state.form.myForm.values) : [] //state.form.myForm.values.length also has to equal 10 or else user cannot skip questions
    }
};
const mapDispatchToProps = dispatch => ({addPoint: score => dispatch(addPoint(score)), goNext: questionNum => dispatch(goToNextQuestion(questionNum)), clear: form => dispatch()});
FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormContainer);

export default reduxForm({ form: "myForm" })(FormContainer);
