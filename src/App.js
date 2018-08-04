import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import { connect } from 'react-redux';
import * as actions from './actions';

import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';

import { Route, Switch,  withRouter } from 'react-router-dom';

import Home from './routes/Home';
import Settings from './routes/Settings';

import SideNavBar from './components/SideNav';
import NavigationBar from './components/NavigationBar';

class App extends Component {

  componentWillMount() {
    // this.unlisten = this.props.history.listen((location, action) => {
    //   console.log("on route change");
    // });
  }

  componentWillUnmount() {
      // this.unlisten();
  }


  renderHome = () => {
      return <Home />;
  }

  renderSettings = () => {
      return <Settings />;
  }    

  
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
          <div>
            <NavigationBar />
          </div>
          <main>
              <Switch>
                <Route exact path="/" render={this.renderHome} />
                <Route exact path="/settings" render={this.renderSettings} />
              </Switch>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changePageHome: () => push('/'),
  changePageSettings: () => push('/settings')
}, dispatch)




export default withRouter(connect(mapStateToProps, actions)(App));
