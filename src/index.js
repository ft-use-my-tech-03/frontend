import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './store'


const store = createStore(rootReducer,applyMiddleware(thunk, logger))

ReactDOM.render(

    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
    ,
  document.getElementById('root')
);
