import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector, routeNode } from 'redux-router5'


// import Home from './Home';
// import Settings from './Settings';
// import Calendar from './Calendar';

import NotFound from './NotFound'

function Main( route ) {
    console.log("hello", route)

    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'settings') {
        return <Settings />
    }

    if (topRouteName === 'calendar') {
        return <Calendar />
    }

    return <NotFound />
}

export default connect()(Main)
