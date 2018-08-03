import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import { connect } from 'react-redux';
import * as actions from './actions';

import { Route } from 'react-router-dom';

import Home from './routes/Home';
import Settings from './routes/Settings';

import SideNavBar from './components/SideNav';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar
        sidebar={<SideNavBar />}
        open={this.props.sidebarOpen}
        docked={this.props.docked}
        styles={{sidebar: { background: "#2d353c" }}}
      >
        <div>
          <NavigationBar />
          <main>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
            </div>
          </main>
        </div>
        </Sidebar>
      </div>
    );
  }
}

const mapStateToProps = ({ sidebarOCReducer }) => {
  const { sidebarOpen, docked } = sidebarOCReducer
  return { sidebarOpen, docked }
}




export default connect(mapStateToProps, actions)(App);
