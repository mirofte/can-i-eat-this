import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './Reducers';
import {featureMiddleware, coreMiddleware} from "./Middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

const store = createStore( rootReducer, {}, enhancer );

// create and configure the store
export default store;
	