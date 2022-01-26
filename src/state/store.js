import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducers } from './reducers';


const logger = createLogger();

export const store = createStore(rootReducers, {}, applyMiddleware(thunk, logger));
