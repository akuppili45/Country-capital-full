import { apiCall } from '../../services/api';
import { LOAD_QUESTIONS } from '../../store/actionTypes'

export const loadQuestions = questions => ({
    type: LOAD_QUESTIONS,
    questions
});

export const fetchQuestions = () => {
    return dispatch => {
        return apiCall("get", "/questions")
            .then(res =>{
                //console.log(res.quizQuestions);
                dispatch(loadQuestions(res.quizQuestions));
            })
            .catch(err => {
                console.log(err);
            });
    }
}
