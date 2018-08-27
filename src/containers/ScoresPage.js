import React, { Component } from 'react';
import ScoreList from '../components/ScoreList';
import { fetchScores } from '../store/actions/scores';
import { connect } from 'react-redux';
// const ScoresPage = ({ userId, fetchScores, scores }) => {
//     return (
        
//     );
// }
class ScoresPage extends Component{
    componentDidMount(){
        this.props.fetchScores(this.props.userId);
    }
    render(){
        return (
            <div><ScoreList userId={this.props.userId} scores={this.props.scores} /></div>
        );
    }
}
function mapStateToProps(state){
    return {
        userId: state.currentUser.user.id,
        scores: state.scores
    }
}

export default connect(mapStateToProps, { fetchScores })(ScoresPage);
