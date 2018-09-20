/* eslint-disable global-require */
/*
 *
 * AppRoot
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';

import App from './containers/App3';
import App2 from './containers/App2';


const Root = ({ router, store, children }) => (
	<Provider store={store}>
		<RouterProvider router={router}>
			<div>
				{ children }

				<App />
				<App2 />
			</div>
		</RouterProvider>
	</Provider>
);

Root.propTypes = {
	router: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
};

export default Root;
