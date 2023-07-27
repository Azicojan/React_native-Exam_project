// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('Initial State:', store.getState());

// Add a listener to log state changes after each dispatch
store.subscribe(() => {
    console.log('Current State:', store.getState());
  });

  
export default store;
