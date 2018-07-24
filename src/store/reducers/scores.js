import { LOAD_SCORES } from '../actionTypes';

const scores = (state=[], action) => {
    switch(action.type){
        case LOAD_SCORES:
            return [...action.currentUser.scores];
        default: return state;
    }
}
export default scores;
