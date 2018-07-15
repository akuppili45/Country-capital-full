import { CHANGE_GAME_MODE, ANSWER_QUESTION, REQUEST_COUNTRY_DATA, RECEIVE_COUNTRY_DATA,
SCORE, GAME_MODE, GO_TO_NEXT_QUESTION } from '../actions';
import { combineReducers } from '../../node_modules/redux';
import shuffle from 'shuffle-array';
import { reducer as formReducer } from "redux-form";

function selectedGameMode(state=GAME_MODE.START, action){
    switch(action.type){
        case CHANGE_GAME_MODE:
            return action.gameMode;
        default: return state;
    }
}

function showData(state=[], action){
    switch(action.type){
        case RECEIVE_COUNTRY_DATA:
            // let countryData = Array(action.countries.length).fill().map((country, index) => country.name );
            let countryData = action.countries.map(country => {
                return {country: country.name, capital: country.capital }
            });
            countryData = countryData.filter(country => country.capital != "");
            countryData = shuffle(countryData);
            let questionsAndRightAnswers = Array(10).fill().map((invalid, index) => {     
                return {
                    question: countryData[index].country,
                    answer: countryData[index].capital,
                    allChoices: shuffle([
                        countryData[index].capital,
                        countryData[10].capital,
                        countryData[11].capital,
                        countryData[12].capital
                    ])
                }
            });
            return questionsAndRightAnswers;
        default: return state;
    }
}
function showCurrentQuestion(state=0, action){
    switch(action.type){
        case GO_TO_NEXT_QUESTION:
            return state+1;
        default: return state;
    }
}
const rootReducer = combineReducers({
    selectedGameMode,
    showData,
    showCurrentQuestion,
    form: formReducer
});
export default rootReducer;

