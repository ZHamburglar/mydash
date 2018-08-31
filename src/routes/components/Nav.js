import React from 'react'
import { connect } from 'react-redux'
import { BaseLink, withRoute } from 'react-router5'

console.log('nav original', "proppies")
function Nav(props) {
    const { router } = props
    console.log("router", router)
    return (
        <nav>
            <BaseLink
                router={router}
                routeName="inbox"
                routeOptions={{ reload: true }}
            >
                Inbox
            </BaseLink>
            <BaseLink router={router} routeName="compose">
                Compose
            </BaseLink>
            <BaseLink router={router} routeName="contacts">
                Contacts
            </BaseLink>
            <BaseLink router={router} routeName="settings">
                Settings
            </BaseLink>
            <BaseLink router={router} routeName="calendar">
                Calendar
            </BaseLink>


        </nav>
    )
}

export default connect(state => state.router.route)(Nav)
