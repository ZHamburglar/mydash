import React, { Component } from 'react';

import Sidebar from 'react-sidebar';
import { Button } from 'react-bootstrap'

import { Route } from 'react-router-dom';
import Home from './routes/Home';

import SideNavBar from './components/SideNav';

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
        open={this.state.sidebarOpen}
        docked={this.state.docked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{sidebar: { background: "#2d353c" }}}
      >
        <div>
          <main>
            <div>
              <Route exact path="/" component={Home} />
              <Button onClick={() => this.onSetSidebarOpen()}>Close Side Nav</Button>
              <Button onClick={() => this.onSetSidebarClose()}>Open Side Nav</Button>

            </div>
          </main>
        </div>

        </Sidebar>
        
        
      </div>
    );
  }
}


export default App;
