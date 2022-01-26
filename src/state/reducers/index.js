import { combineReducers } from 'redux';
import { searchRobots, requestRobots } from './robotsReducer';


export const rootReducers = combineReducers({ requestRobots, searchRobots });
