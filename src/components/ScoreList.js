import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScores } from '../store/actions/scores';
import axios from 'axios';
import { apiCall } from '../services/api';
class ScoreList extends Component{
    componentDidMount(){
        // apiCall('get', 'http://localhost:8081/api/users/5b55d8c6c03acc0eec0c686c/scores').then(res =>{
        //     console.log(res)
        // });
        this.props.fetchScores("5b55d8c6c03acc0eec0c686c");
    }
    render(){
        // const { scores } = this.props;
        // console.log(scores);
        return (
            <div>Scoreslist</div>
        )
    }
}
function mapStateToProps(state){
    return {
        scores: [4,2]
    }
}
export default connect(mapStateToProps, { fetchScores })(ScoreList);

