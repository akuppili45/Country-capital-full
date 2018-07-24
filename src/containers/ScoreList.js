import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScores } from '../store/actions/scores';

class ScoreList extends Component{
    componentDidMount(){
        fetch("http://localhost:8081").then(res => {
            return res.json();
          }).then(data => {
              console.log(data);
          }).catch(err =>{
              console.log(err);
          })
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

