import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
    if(!currentUser.isAuthenticated)
    {
        return (
        <div>
            <h1>What's Happening?</h1>
            <h4>New to Warbler?</h4>
            <Link to="/signup">
            Sign up here
            </Link>
        </div>
       )
    }
    return (
        <div>
            You made it
        </div>
       )
};
export default Homepage;
