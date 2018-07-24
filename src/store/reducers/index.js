import { combineReducers } from 'redux'; 
import currentUser from './currentUser';
import scores from './scores';
import errors from './errors'
const rootReducer = combineReducers({
    currentUser,
    errors
});
export default rootReducer;

