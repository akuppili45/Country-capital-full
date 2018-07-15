import React from "react";
import { reduxForm } from "redux-form";

import FormComponent from "./form.component";

export const FormContainer = props => {
//     console.log(handleSubmit)
//   const submitForm = formValues => {
//     console.log("submitting Form: ", formValues);
//   };
console.log(props)
//   return <FormComponent onSubmit={submitForm} handleSubmit={handleSubmit} />;
return <div></div>
};

const formConfiguration = {
  form: "my-very-own-form"
};

export default reduxForm(formConfiguration)(FormContainer);
