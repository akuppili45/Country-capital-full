import React, { Component } from 'react';
import { fetchQuestions } from '../store/actions/questions';
import { postNewScore } from '../store/actions/scores';
import { connect } from 'react-redux';
import CountryToCapital from '../components/CountryToCapital';
class Game extends Component{
    componentDidMount(){
        this.props.fetchQuestions(); //return an array NOT an object and then pass the ARRAY to <CountryToCapital> component
    }

    render(){
        if(this.props.questions.length !== 0){
            return (
                <CountryToCapital questions={this.props.questions} postNewScore={this.props.postNewScore} userId={this.props.userId}/>
                // <div></div>
            );
        }
        // else{
            return (
                <div></div>
            );
        // }
       
    }
}
function mapStateToProps(state){
    return {
        userId: state.currentUser.user.id,
        questions: state.questions
    }
}

export default connect(mapStateToProps, { fetchQuestions, postNewScore })(Game);

