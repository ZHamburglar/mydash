import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import { store, history } from './store';

import Root from './Root';

ReactDOM.render(
  <Root store={store} history={history} />, 
  document.getElementById('root')
);

// const title = 'My Minimal React Webpack Babel Setup';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('root')
// );


module.hot.accept();
