import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <div>
        
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
