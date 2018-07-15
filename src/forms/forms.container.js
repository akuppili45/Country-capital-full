import React from "react";
import { reduxForm } from "redux-form";
import FormComponent from './forms.component';
const FormContainer = ({handleSubmit}) => {
    const submitForm = formValues => {
        console.log("submitting Form: ", formValues);
    };
    // return <div />
    return <FormComponent onSubmit={submitForm} handleSubmit={handleSubmit}/>;
};
export default reduxForm({ form: "my form" })(FormContainer);
