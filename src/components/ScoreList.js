import React, { Component } from 'react';
import axios from 'axios';
import { apiCall } from '../services/api';
class ScoreList extends Component{
    componentDidMount(){
        this.props.fetchScores(this.props.userId);
    }
    render(){
        return (
            <div>Scoreslist</div>
        )
    }
}

export default ScoreList;


