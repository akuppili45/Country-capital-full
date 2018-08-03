import React, { Component } from 'react';
import { fetchQuestions } from '../store/actions/questions';
import { connect } from 'react-redux';
import CountryToCapital from '../components/CountryToCapital';
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.fetchQuestions(); //return an array NOT an object and then pass the ARRAY to <CountryToCapital> component
        //this.setState(this.props.fetchQuestions)
    }

    render(){
        console.log(this.state);
        return (
            // <CountryToCapital questions={this.state.questions}/>
            <div></div>
        );
    }
}
function mapStateToProps(state){
    return {
        userId: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchQuestions })(Game);

