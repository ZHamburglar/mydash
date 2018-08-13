import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from './actions';

import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';

import { Route, Switch,  withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';


import Home from './routes/Home';
import Settings from './routes/Settings';
import Calendar from './routes/Calendar';

// import NavigationBar from './components/NavigationBar';

import MainHeader from './components/MainHeader';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };


  componentWillMount() {
  }

  componentWillUnmount() {
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }


  renderHome = () => <Home />

  renderSettings = () => <Settings />  
  
  renderCalendar = () => <Calendar />

  
  render() {
    return (
      <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" onClick={() => this.props.changePageHome()}>
                    <Icon type="home" />
                    <span>Home</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span>User</span></span>}
                  >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={<span><Icon type="team" /><span>Team</span></span>}
                  >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                  </Menu.Item>
                  <Menu.Item key="10" onClick={() => this.props.changePageSettings()}>
                    <Icon type="setting" />
                    <span>Settings</span>
                  </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
              <MainHeader />
              <Content style={{ margin: '0 16px' }}>

                <div style={{background: '#fff', minHeight: 360 }}>
                  <main>
                    <Switch>
                      <Route exact path="/" render={this.renderHome} />

                      <Route exact path="/settings" render={this.renderSettings} />
                      <Route exact path="/calendar" render={this.renderCalendar} />


                    </Switch>
                  </main>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Bear Mobile © 2018 
              </Footer>
            </Layout>
        </Layout>
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
