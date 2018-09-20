import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import loadingReducer from './loading/index';
import ynabReducer from './ynab/index';

export function createReducer() {
	return combineReducers({
		router: router5Reducer,
		loading: loadingReducer,
		ynab: ynabReducer,
	});
}
