import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import NotFound from './components/NotFound';
import Settings from './Settings';
import Calendar from './Calendar';
import YNAB from './YNABCharts';
import Home from './Home';

function Main({ route }) {
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'settings') {
        return <Settings />
    }
    if (topRouteName === 'calendar') {
        return <Calendar />
    }
    if (topRouteName === 'home'){
        return <Home />
    }
    if (topRouteName === 'ynab'){
        return <YNAB />
    }
    return <NotFound />
}

export default connect(state => routeNodeSelector(''))(Main)
