import { apiCall } from '../../services/api';
export const fetchQuestions = () => {
    return dispatch => {
        return apiCall("get", "/questions")
            .then(res =>{
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
}
