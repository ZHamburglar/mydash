import React, { Component } from 'react';

import Sidebar from 'react-sidebar';
import { Button } from 'react-bootstrap'

import { connect } from 'react-redux';

import * as actions from './actions';

import { Route } from 'react-router-dom';
import Home from './routes/Home';

import SideNavBar from './components/SideNav';
import NavigationBar from './components/NavigationBar';

const mql = window.matchMedia(`(min-width: 800px)`);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      docked: true
    };
  }

  onSetSidebarOpen = ()=> {
    // this.setState({sidebarOpen: open});
    this.setState({docked: false, sidebarOpen: false})
  }

  onSetSidebarClose = ()=> {
    // this.setState({sidebarOpen: open});
    this.setState({docked: true, sidebarOpen: false})
  }

  render() {
    return (
      <div>
        <Sidebar
        sidebar={<SideNavBar />}
        open={this.props.sidebarOpen}
        docked={this.props.docked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{sidebar: { background: "#2d353c" }}}
      >
        <div>
          <NavigationBar />




          <main>
            <div>
              <Route exact path="/" component={Home} />
              

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
