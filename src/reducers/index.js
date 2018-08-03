import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import sidebarOCReducer from './sidebar_oc_reducer';



export const reducers = combineReducers({
  searchReducer,
  sidebarOCReducer
});