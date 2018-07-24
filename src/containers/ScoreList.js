import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScores } from '../store/actions/scores';

class ScoreList extends Component{
    componentDidMount(){
        this.props.fetchScores()
    }
    render(){
        const { scores } = this.props;
        console.log(scores);
        return (
            <div>Scoreslist</div>
        )
    }
}
function mapStateToProps(state){
    return {
        scores: state.currentUser.scores
    }
}
export default connect(mapStateToProps, { fetchScores })(ScoreList);

