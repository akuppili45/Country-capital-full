import React from "react";
import { Field } from "redux-form";
// import Text from "../components/text";
import Radio from "../components/radio";
export const FormComponent = ({ handleSubmit, onSubmit, choices, answerIsCorrect }) => {
  if(answerIsCorrect){
    console.log("Correct!!!");
  }
  return (
    <div>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="answerChosen"
          component={Radio}
          options={{
            [choices[0]]: choices[0],
            [choices[1]]: choices[1],
            [choices[2]]: choices[2],
            [choices[3]]: choices[3]
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
