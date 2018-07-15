import React from "react";
import { Field } from "redux-form";
// import Text from "../components/text";
import Radio from "../components/radio";
export const FormComponent = ({ handleSubmit, onSubmit }) => {
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
