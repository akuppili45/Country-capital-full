import React, { Component } from 'react';
import { fetchScores } from '../store/actions/scores';
import { connect } from 'react-redux';
class Game extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){

    }

    render(){
        return (
            <div></div>
        );
    }
}
function mapStateToProps(state){
    return {
        userId: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchScores })(ScoresPage);

