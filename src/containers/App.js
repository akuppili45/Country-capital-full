import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from 'jwt-decode';


const store = configureStore();

if(localStorage.jwtToken){ //we put a property of jwtToken in the auth file 
  setAuthorizationToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }
  catch(err){
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
        <div>
      <Navbar/>
      <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
