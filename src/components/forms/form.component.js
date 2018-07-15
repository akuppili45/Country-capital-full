import React from "react";
import { Field } from "redux-form";
import Radio from "./radio";
export const FormComponent = ({ handleSubmit, onSubmit }) => {
    console.log(handleSubmit)
  return (
    <div>
      <h1>My Very own Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="spiceLevel"
          label="Spice Level"
          component={Radio}
          options={{
            mild: "Mild",
            medium: "Medium",
            hot: "hot"
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
