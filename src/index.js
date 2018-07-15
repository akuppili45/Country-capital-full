import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuestionContent from './containers/QuestionContent';
import registerServiceWorker from './registerServiceWorker';
// import Root from './components/Root'
import { configureStore } from "./store";

const NewApp = () => (
    
    <Provider store={configureStore()}>
      <Router>
          <div>
        <Route exact path='/' component={App} />
        <Route path='/question' component={QuestionContent} />
        </div>
      </Router>
    </Provider>
 
)

ReactDOM.render(<NewApp />, document.getElementById('root'));
registerServiceWorker();
