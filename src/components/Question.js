import React from 'react';
import {GAME_MODE} from '../actions';

const Question = ({questions, question, changeGameMode}) => {
    changeGameMode(GAME_MODE.COUNTRY_TO_CAPITAL);
    return(
        <h1>{question}</h1>
    );
};
export default Question;
