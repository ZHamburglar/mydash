import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/Home';

import SideBar from './components/SideNav'

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div>
          <main>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}


export default App;
