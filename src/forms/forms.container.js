import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from './forms.component';
import { connect } from 'react-redux';
let FormContainer = props => {
    const submitForm = formValues => {
        console.log("submitting Form: ", formValues);
    };
    // return <div />
    return <FormComponent onSubmit={submitForm} handleSubmit={props.handleSubmit} choices={props.choices}/>;
};
const mapStateToProps = state => ({choices: state.showData[state.showCurrentQuestion].allChoices});
FormContainer = connect(mapStateToProps)(FormContainer);

export default reduxForm({ form: "myForm" })(FormContainer);
