import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
