import React, { Component } from 'react';
import axios from 'axios';
import { apiCall } from '../services/api';
class ScoreList extends Component{
    // componentDidMount(){
    //     this.props.fetchScores(this.props.userId);
    // }
    render(){
        if(this.props.scores.length !== 0){ //SUPER IMPORTANT THIS IS Here
            console.log(this.props.scores);
        }
        
        return (
            <div>Scoreslist</div>
        )
    }
}

export default ScoreList;


