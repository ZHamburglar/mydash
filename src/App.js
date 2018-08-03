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
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    return (
      <div>
        <Sidebar
        sidebar={<SideNavBar />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{sidebar: { background: "white" }}}
      >
        <div>
          <main>
            <div>
              <Route exact path="/" component={Home} />
              <Button onClick={() => this.onSetSidebarOpen(true)}>Open Side Nav</Button>
            </div>
          </main>
        </div>

        </Sidebar>
        
        
      </div>
    );
  }
}


export default App;
