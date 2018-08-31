import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'
import Inbox from './Inbox'
import Compose from './Compose'
import NotFound from './NotFound'
import Settings from './Settings'
import Calendar from '../Calendar'

function Main({ route, emails }) {
    console.log('henlo', route)
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

    return <NotFound />
}

export default connect(state => routeNodeSelector(''))(Main)
