import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import { connect } from 'react-redux';
import * as actions from './actions';

import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';

import { Route, Switch,  withRouter } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';


import Home from './routes/Home';
import Settings from './routes/Settings';

import SideNavBar from './components/SideNav';
import NavigationBar from './components/NavigationBar';

import PageHeader from './components/PageHeader';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

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
        {/* <Sidebar
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
        </Sidebar> */}
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
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
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <main>
                    <Switch>
                      <Route exact path="/" render={this.renderHome} />
                      <Route exact path="/settings" render={this.renderSettings} />
                    </Switch>
                  </main>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Bear Mobile ©2018
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




export default withRouter(connect(mapStateToProps, actions)(App));
