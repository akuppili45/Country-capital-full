import { LOAD_SCORES } from '../actionTypes';

const scores = (state=[], action) => {
    switch(action.type){
        case LOAD_SCORES:
            return [...action.scores];
        default: return state;
    }
}
export default scores;
