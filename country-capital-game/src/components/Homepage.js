import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
    const buttonStyle = {
        width: "100px",
        margin: "auto"
    };
    const imgStyle = {width: "400px", height: "400px"};
    if(!currentUser.isAuthenticated)
    {
        return (
    <div>
        <div style={{backgroundColor: "#20B2AA"}}>
            <h1 class="d-flex justify-content-center" style={{paddingTop: "70px", paddingBottom: "10px"}}>What's Happening?</h1>
            <h4 class="d-flex justify-content-center" style={{paddingBottom: "10px"}}>New to The Country Game?</h4>
            <div style={buttonStyle}>
            <Link to="/signup" className={`btn btn-primary`}>
            Sign up here
            </Link>
            </div>
        </div>
        <div style={{textAlign: "center", backgroundColor: "#8FBC8F"}}>
        <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/globe-icon.png" style={imgStyle}/>
        </div>
    </div>
       )
    }
    return (
        <div style={{textAlign:"center"}}>
            {/* <Link to={`/users/${currentUser.user.id}/country-to-capital`}></Link> */}
            <h1>Guess the Capital of the Given Country</h1>
            <h2>Ready?</h2>
            <Link to={`/users/${currentUser.user.id}/country-to-capital`} className="btn btn-outline-primary">Start Game</Link>
            {/* <Link to={`/users/${currentUser.user.id}/scores`} className="btn btn-outline-secondary">View Scores</Link> */}
            <div style={{textAlign: "center"}}>
                <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/globe-icon.png" style={imgStyle}/>
            </div>
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
