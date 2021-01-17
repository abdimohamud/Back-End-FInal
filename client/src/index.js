import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './state/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  </Provider>
  ), document.getElementById('root')
);
