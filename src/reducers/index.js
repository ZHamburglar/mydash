import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import sidebarOCReducer from './sidebar_oc_reducer';
import generalSettingsReducer from './general_settings_reducer';
import permanentSettingsReducer from './permanent_settings_reducer';
import quotesReducer from './quotes_reducer';
import googleAuthReducer from './google_auth_reducer';
import sideBarReducer from './sidebar_reducer';



export const reducers = combineReducers({
  searchReducer,
  sidebarOCReducer,
  generalSettingsReducer,
  permanentSettingsReducer,
  quotesReducer,
  googleAuthReducer,
  sideBarReducer
});