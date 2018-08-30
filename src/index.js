import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import { store, history } from './store';
import Root from './Root';

import 'babel-polyfill';

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

module.hot.accept();
