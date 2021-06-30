import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux' //connects global 
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import toggleTheme from './reducers/toggleTheme'

const store = createStore(
  toggleTheme,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
          <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

