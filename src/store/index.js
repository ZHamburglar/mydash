import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { router5Middleware, router5Reducer } from 'redux-router5';
import { createLogger } from 'redux-logger';


import searchReducer from '../reducers/search_reducer';
import sidebarOCReducer from '../reducers/sidebar_oc_reducer';
import generalSettingsReducer from '../reducers/general_settings_reducer';
import permanentSettingsReducer from '../reducers/permanent_settings_reducer';
import quotesReducer from '../reducers/quotes_reducer';
import googleAuthReducer from '../reducers/google_auth_reducer';
import sideBarReducer from '../reducers/sidebar_reducer';
import YNABReducer from '../reducers/YNAB_reducer';


export const history = createHistory();

// export const store = createStore(
// 	  persistReducer(persistConfig, reducers)
// 	, {}
// 	, compose(applyMiddleware(thunk, routerMiddleware(history)))
// );

// const persistConfig = {
//     key: 'root', 
// 	storage,
// 	whitelist: ['permanentSettingsReducer', 'sideBarReducer']
// };

// export default function configureStore(router, initialState = {}) {
//     const createStoreWithMiddleware = applyMiddleware(
//         router5Middleware(router),
//         createLogger()
//     )(createStore)

//     const store = createStoreWithMiddleware(
//         combineReducers({
// 			router: router5Reducer,

// 		}),
//         initialState
//     )

//     // window.store = store
//     return store
// }

export default function configureStore(router, initialState = {}) {
    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        router5Middleware(router),
        // createLogger()
    )(createStore)

    const store = createStoreWithMiddleware(
        combineReducers({
            router: router5Reducer,
            searchReducer,
			sidebarOCReducer,
			generalSettingsReducer,
			permanentSettingsReducer,
			quotesReducer,
			googleAuthReducer,
            sideBarReducer,
            YNABReducer
        }),
        initialState
    )

    window.store = store
    return store
}
