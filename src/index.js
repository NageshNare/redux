import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './Store/reducers/counter';
import resultReducer from './Store/reducers/result';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

const logger = state =>{
    return next =>{
        return action =>{
            console.log('[middleware] dispatching', action);
            const result = next(action)
            console.log('[middleware] next state', store.getState())
            return result;
        }
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
