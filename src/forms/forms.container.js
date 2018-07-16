import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from './forms.component';
import { connect } from 'react-redux';
let FormContainer = props => {
    const submitForm = formValues => {
        console.log("submitting Form: ", formValues);
    };
    return <FormComponent onSubmit={submitForm} handleSubmit={props.handleSubmit} choices={props.choices} answerIsCorrect={props.answerIsCorrect}/>;
};
const mapStateToProps = state => {
    const valuesExists = state.form.hasOwnProperty('myForm') && state.form.myForm.hasOwnProperty('values') && state.form.myForm.hasOwnProperty('submitSucceeded');
    return {choices: state.showData[state.showCurrentQuestion].allChoices, answerIsCorrect: valuesExists ? state.form.myForm.values.answerChosen === state.showData[state.showCurrentQuestion].answer : false}
};
FormContainer = connect(mapStateToProps)(FormContainer);

export default reduxForm({ form: "myForm" })(FormContainer);
