import React from 'react';
import {GAME_MODE} from '../actions';
import FormContainer from '../forms/forms.container'
const Question = props => {
    props.changeGameMode(GAME_MODE.COUNTRY_TO_CAPITAL);
    console.log("props:")
    console.log(props);
    return(
        <div>
        <FormContainer/> {/*add props either to FormContainer or somewhere else*/}
        </div>
    );
};
export default Question;
