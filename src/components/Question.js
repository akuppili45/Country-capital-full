import React from 'react';
import {GAME_MODE} from '../actions';
import FormContainer from '../forms/forms.container'
const Question = props => {
    props.changeGameMode(GAME_MODE.COUNTRY_TO_CAPITAL);
    // console.log(props);
    return(
        <div>
        <h1>{props.question}</h1>
        <FormContainer />
        </div>
    );
};
export default Question;
