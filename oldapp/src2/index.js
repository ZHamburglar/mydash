// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { RouterProvider } from 'react-router5'

// import 'babel-polyfill';


// 		{/* <PersistGate loading={null} persistor={persistStore(store)}> */}
//       {/* <RouterProvider router={router}> */}
//           {/* <App /> */}
//       {/* </RouterProvider> */}
// 		{/* </PersistGate> */}

import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import ReactDOM from 'react-dom'
// import App from './App'
// import createRouter from './router'
// import configureStore from './store'
import App from './components2/App'
import createRouter from './create-router'
import configureStore from './create-store'
import './style.css'
// import './App.css'

require('dotenv').config()

const router = createRouter()
const store = configureStore(router)
const wrappedApp = (
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
)

router.start((err, state) => {
    ReactDOM.render(wrappedApp, document.getElementById('root'))
})


// module.hot.accept();
