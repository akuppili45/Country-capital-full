import React from "react";
import { Field } from "redux-form";
// import Text from "../components/text";
import Radio from "../components/radio";

const FullQuestion = ({questions, index}) => {
  const questionContent = questions[index];
  return (
  <div>
    <h1>{questionContent.question}</h1>
    <div>
    <Field
          name={`answerChosen${index}`}
          component={Radio}
          options={{
            [questionContent.allChoices[0]]: questionContent.allChoices[0],
            [questionContent.allChoices[1]]: questionContent.allChoices[1],
            [questionContent.allChoices[2]]: questionContent.allChoices[2],
            [questionContent.allChoices[3]]: questionContent.allChoices[3]
          }}
        />
      </div>
  </div>
  )

}
// const QuestionList = Array(10).fill().map((val, index) => )
export const FormComponent = ({ handleSubmit, onSubmit, questions}) => {
  // console.log('questions: ')
  // console.log(questions);
  const questionList = Array(10).fill().map((val,i) => <FullQuestion key={i}questions={questions} index={i} />)
  return (
    <div>  
      <form onSubmit={handleSubmit(onSubmit)}>
        {questionList}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
