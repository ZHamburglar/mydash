import { createStore, applyMiddleware, combineReducers } from 'redux';
import { emails, draft } from './reducers';

import { router5Reducer } from 'redux-router5';

export const reducerList = combineReducers({
    router: router5Reducer,
    emails,
    draft
})




