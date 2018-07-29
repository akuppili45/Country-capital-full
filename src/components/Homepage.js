import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchScores } from '../store/actions/scores';
import ScoreList from './ScoreList';
const Homepage = ({ currentUser }) => {
    if(!currentUser.isAuthenticated)
    {
        return (
        <div>
            <h1>What's Happening?</h1>
            <h4>New to The Country Game?</h4>
            <Link to="/signup">
            Sign up here
            </Link>
        </div>
       )
    }
    return (
        <div>
            <ScoreList />
        </div>
       )
};
// class Homepage extends Component{
//     componentWillMount(){
//         fetchScores("5b55d8c6c03acc0eec0c686c")
//     }
//     render(){
//         return (
//             <div></div>
//         );
//     }
// }
export default Homepage;
