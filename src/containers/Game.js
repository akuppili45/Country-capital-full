import React, { Component } from 'react';
import { fetchQuestions } from '../store/actions/questions';
import { connect } from 'react-redux';
import CountryToCapital from '../components/CountryToCapital';
class Game extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchQuestions(); //return an array NOT an object and then pass the ARRAY to <CountryToCapital> component
        
    }

    render(){
        return (
            // <CountryToCapital questions={this.props.questions}/>
            <div></div>
        );
    }
}
function mapStateToProps(state){
    return {
        userId: state.currentUser.user.id,
        questions: state.questions
    }
}

export default connect(mapStateToProps, { fetchQuestions })(Game);

