import { Provider } from 'react-redux';
import React, { Component } from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import QuestionContent from '../containers/QuestionContent';
import { configureStore } from '../store';
class Root extends Component {
    render() {
      return (
          <div>
            <Provider store={configureStore()}>
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
