import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './reducer.js';

const composedEnhancer = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancer);

export default store;
