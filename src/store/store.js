import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import combinedReducer from './combinedReducer';

const initialState = {};
const middleware = [thunk];


export default createStore(
  combinedReducer(),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);