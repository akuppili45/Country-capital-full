import React, { Component } from 'react';

class ScoreList extends Component{
    // componentDidMount(){
    //     this.props.fetchScores(this.props.userId);
    // }
    render(){
        const styles = {
            textAlign: "center"
        };
        if(this.props.scores.length !== 0){ //SUPER IMPORTANT THIS IS Here
            const { scores } = this.props;
            const scoresListOnPage = scores.map(scoreObj => <li>{scoreObj.score}</li>);
            return (
                <div style={styles}>
                    Scoreslist
                    <ul>
                        {scoresListOnPage.reverse()}
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


