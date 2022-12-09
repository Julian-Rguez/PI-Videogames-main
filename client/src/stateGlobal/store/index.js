//npm install --save redux-devtools-extension

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from '../reducer';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;