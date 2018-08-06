import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import sidebarOCReducer from './sidebar_oc_reducer';
import generalSettingsReducer from './general_settings_reducer';



export const reducers = combineReducers({
  searchReducer,
  sidebarOCReducer,
  generalSettingsReducer
});