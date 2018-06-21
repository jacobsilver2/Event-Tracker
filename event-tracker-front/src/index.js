import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import allReducers from './reducers'
import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise)
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
