import { Provider } from 'react-redux';
import React, { Component } from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import Question from './Question';
import QuestionContent from '../containers/QuestionContent';


// const loggerMiddleware = createLogger();
// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//       thunkMiddleware, // lets us dispatch() functions
//       loggerMiddleware // neat middleware that logs actions
//     )
//   )
class Root extends Component {
    render() {
      return (
          <div>
            <Provider store={store}>
              <Router>
                  <div>
                <Route exact path='/' component={App} />
                <Route path='/question' component={QuestionContent} />
                </div>
              </Router>
            </Provider>
          </div>
      );
    }
  };
export default Root;
