import { combineReducers, createStore, applyMiddleware } from 'redux';
import composeEnhancers from '../settings/settingRedux';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
