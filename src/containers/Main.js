import React from "react";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from "../components/Homepage";
import AuthForm from '../components/AuthForm';
import { authUser, getScores } from '../store/actions/auth';
import { removeError } from "../store/actions/errors";
import ScoreList from "../components/ScoreList";
import withAuth from "../hocs/withAuth";
import ScoresPage from "./ScoresPage";
import Game from "./Game";
//<Switch> is apparently an alternative to <Router>
const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    //You have to set props to the Route using render prop
    return (
        <div>
            <Switch>
                <Route exact path='/' render={props => <Homepage currentUser={currentUser}{...props}/>}></Route>
                <Route exact path='/signin' render={props => 
                    {
                        return (
                            <AuthForm removeError={removeError} onAuth={authUser} buttonText="Log in" heading="Welcome back" signUp={false} errors={errors} {...props}/>
                        )
                    }
                    }>
                </Route>
                <Route exact path='/signup' render={props => 
                    {
                        return (
                            <AuthForm removeError={removeError} onAuth={authUser} buttonText="Sign up!" heading="Join today!" signUp={true} errors={errors}{...props}/>
                        )
                    }
                    }>
                </Route>
                <Route path={`/users/:id/scores`}
                       component={withAuth(ScoresPage)}
                >

                </Route>
                <Route path={`/users/:id/country-to-capital`}
                       component={withAuth(Game)}
                >

                </Route>
            </Switch>
        </div>
    );
}
function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}
export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main)); //pass authUser to as mapDispatchtoProps
