import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import NotFound from '../components/NotFound';
import Settings from '../components/Settings/Settings';
import Calendar from '../components/Calendar/Calendar';
import YNAB from '../components/YNAB/YNABCharts';
import Home from '../components/Home/Home';

function Main({ route }) {
	const topRouteName = route.name.split('.')[0]

	if (topRouteName === 'Settings') {
		return <Settings />
	}
	if (topRouteName === 'Calendar') {
    	return <Calendar />
	}
	if (topRouteName === 'Home'){
		return <Home />
	}
	if (topRouteName === 'YNAB'){
		return <YNAB />
	}
	return <NotFound />
}

export default connect(state => routeNodeSelector(''))(Main)
