import React from 'react';
import ScoreList from '../components/ScoreList';
import { fetchScores } from '../store/actions/scores';
import { connect } from 'react-redux';
const ScoresPage = ({ userId, fetchScores }) => {
    return (
        <div><ScoreList userId={userId} fetchScores={fetchScores} /></div>
    );
}
function mapStateToProps(state){
    return {
        userId: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchScores })(ScoresPage);
