import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
    , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
