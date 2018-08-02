import React, { Component } from 'react';


import axios from 'axios';
import { apiCall } from '../services/api';
class ScoreList extends Component{
    componentDidMount(){
        // apiCall('get', 'http://localhost:8081/api/users/5b55d8c6c03acc0eec0c686c/scores').then(res =>{
        //     console.log(res)
        // });
        this.props.fetchScores(this.props.userId);
    }
    render(){
        // const { scores } = this.props;
        // console.log(scores);
        return (
            <div>Scoreslist</div>
        )
    }
}

export default ScoreList;


