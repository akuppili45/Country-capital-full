import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';
import { setTokenHeader } from "../../services/api";
import { loadScores } from '../actions/scores';

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token);
}

export function logout(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        dispatch(loadScores([]));
    }
}

export function authUser(methodType, userData){ //did you ever call dispatch(authUser)
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `api/auth/${methodType}`, userData).then(({token, ...user})=> { //maybe response comes from backend and destructured
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
                // dispatch fetching scores and put those scores inside the scores attribute in the setCurrentUser dispatch
                // dispatch(fetchScores(user.id)); //I think this doesn't work because I am not routing it in ReactRouter
                // You cannot get the scores information with the link you are using in this case it is the sign in link
                // dispatch(setCurrentUser({...user, scores: [16, 19]}));
                // fetchScores(user.id);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            }).catch(err =>{
                dispatch(addError(err.message));
                reject();
            }
            )
        })
    }
}
