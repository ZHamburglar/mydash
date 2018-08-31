import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Main from './Main'

class App extends Component {
    render(){
        return (
            <div className="mail-client">
                <aside>
                    <Nav />
                </aside>
    
                <main>
                    <Main emails={this.props.emails} />
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { emails: state.emails}
}

  export default connect(mapStateToProps)(App)