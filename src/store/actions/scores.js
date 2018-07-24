import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_SCORES } from "../actionTypes";

//dispatched in fetchScores
export const loadScores = scores => ({
    type: LOAD_SCORES,
    scores
});

export const fetchScores = (userId) => {
        return new Promise((resolve, reject) => {
            return apiCall("GET", `/api/users/${userId}/scores`).then(res => {
                console.log(res);
                resolve();
            }).catch(err => {
                console.log(err);
                reject();
            });
           
        })
    
    
}
