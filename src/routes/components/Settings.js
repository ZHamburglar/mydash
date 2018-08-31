import React from 'react'
import { connect } from 'react-redux'
import InboxList from './InboxList'
import Message from './Message'
import { routeNodeSelector } from 'redux-router5'

function Settings(props) {
    const { route, emails } = props

    return (
        <div className="inbox">
            Settings!
        </div>
    )
}

export default connect(routeNodeSelector('settings'))(Settings)