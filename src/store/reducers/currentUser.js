import {SET_CURRENT_USER} from '../actionTypes';

const defaultState = {
    isAuthenticated: false,
    user: {}
}
export default (state=defaultState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {isAuthenticated: true, user: action.user};
        default: return state;
    }
}
