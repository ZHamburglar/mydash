import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'
import Inbox from './components/Inbox'
import Compose from './components/Compose'
import NotFound from './components/NotFound'
import Settings from './components/Settings'
import Calendar from './Calendar'
import Home from './Home';

function Main({ route, emails }) {
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'inbox') {
        return <Inbox emails={emails} />
    }

    if (topRouteName === 'compose') {
        return <Compose />
    }

    if (topRouteName === 'settings') {
        return <Settings />
    }

    if (topRouteName === 'calendar') {
        return <Calendar />
    }
    if (topRouteName === 'home'){
        return <Home />
    }

    return <NotFound />
}

export default connect(state => routeNodeSelector(''))(Main)
