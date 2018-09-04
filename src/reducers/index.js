import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import sidebarOCReducer from './sidebar_oc_reducer';
import generalSettingsReducer from './general_settings_reducer';
import permanentSettingsReducer from './permanent_settings_reducer';
import quotesReducer from './quotes_reducer';
import googleAuthReducer from './google_auth_reducer';
import sideBarReducer from './sidebar_reducer';
import YNABReducer from './YNAB_reducer';

import { router5Reducer } from 'redux-router5';




export const reducers = combineReducers({
  router: router5Reducer,
  searchReducer,
  sidebarOCReducer,
  generalSettingsReducer,
  permanentSettingsReducer,
  quotesReducer,
  googleAuthReducer,
  sideBarReducer,
  YNABReducer
});