import { combineReducers } from 'redux'; 
import currentUser from './currentUser';
import scores from './scores';
import errors from './errors';
import questions from './questions';
const rootReducer = combineReducers({
    currentUser,
    scores,
    questions,
    errors
});
export default rootReducer;

