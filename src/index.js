// import React from 'react';
// import ReactDOM from 'react-dom';

// import './App.css';

// import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { ConnectedRouter as Router } from 'react-router-redux';
// import { RouterProvider } from 'react-router5'

// // import App from './App';
// import App from './routes/components/App';


// import createRouter from './router';
// import configureStore from './store';

// import 'babel-polyfill';

// const router = createRouter()
// const store = configureStore(router)

// console.log('henlo', store, router)
// const wrappedApp = (
//   <Provider store={store}>
//       <RouterProvider router={router}>
//         <App />

//       </RouterProvider>

// 	</Provider>
// )

// router.start((err, state) => {
//   ReactDOM.render(wrappedApp, document.getElementById('root'))
// })

// // module.hot.accept();


// 		{/* <PersistGate loading={null} persistor={persistStore(store)}> */}
//       {/* <RouterProvider router={router}> */}
//           {/* <App /> */}
//       {/* </RouterProvider> */}
// 		{/* </PersistGate> */}

import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import ReactDOM from 'react-dom'
import App from './routes/components/App'
import createRouter from './create-router'
import configureStore from './store'
import './style.css'

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