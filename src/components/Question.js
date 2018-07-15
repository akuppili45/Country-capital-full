import React from 'react';
import { FormContainer } from './forms/form.container';
import { Provider } from 'react-redux';
import { configureFormStore, configureStore } from "../store";

const Question = ({questions, question}) => {
    return(
        <div>
            <h1>{question}</h1>
            <div>
                <Provider store={configureStore()}>
                <FormContainer />
                </Provider>
            </div>
        </div>
    );
};
export default Question;
