import React, { Component } from 'react';

class ScoreList extends Component{
    // componentDidMount(){
    //     this.props.fetchScores(this.props.userId);
    // }
    render(){
        if(this.props.scores.length !== 0){ //SUPER IMPORTANT THIS IS Here
            const { scores } = this.props;
            const scoresListOnPage = scores.map(scoreObj => <li>{scoreObj.score}</li>);
            return (
                <div>
                    Scoreslist
                    <ul>
                        {scoresListOnPage}
                    </ul>
                </div>
            );
        }
        
        return (
            <div>Scoreslist</div>
        )
    }
}

export default ScoreList;


