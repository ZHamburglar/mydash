import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



class MainHeader extends Component {

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <Header style={{ background: '#f0f2f5', padding: 0 }} />
      </div>
    );
  }
}


export default MainHeader;