import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_SCORES } from "../actionTypes";

//dispatched in fetchScores
export const loadScores = scores => ({
    type: LOAD_SCORES,
    scores
});

export const fetchScores = (userId) => {
    return dispatch => {
        return apiCall("get", "/")
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err)
          });
      };
    
}
