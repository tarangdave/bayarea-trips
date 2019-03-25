import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const initialState = {}
const middlewares = [
  thunk,
]

let enhancedComposer = compose;

const composedEnhancers = enhancedComposer(
  applyMiddleware(...middlewares),
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;
