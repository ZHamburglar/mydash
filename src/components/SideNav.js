import React, { Component } from 'react';

import { connect } from 'react-redux'
import { BaseLink, withRoute } from 'react-router5'

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class SideNavigator extends Component {
    state = {
        collapsed: false,
    };



    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        const { router } = this.props

        console.log('side navigator', this.props, "state", this.state)

        return (

            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" onClick={() => console.log("home")}>
                        <Icon type="home" />
                        <span>Home</span>
                        <BaseLink router={this.props.router} routeName="home">
                        </BaseLink>   
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 22</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key="3">Davey</Menu.Item>
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
                    <Menu.Item key="22" onClick={() => console.log("setting")}>
                        <Icon type="setting" />
                        Calendar
                        <BaseLink router={router} routeName="calendar">
                        </BaseLink>                 
                    </Menu.Item>
                    {/* {this.renderSideBarItems(this.props.sideItems)} */}
                    <Menu.Item key="10" onClick={() => console.log("setting")}>
                        <Icon type="setting" />
                        Settings

                        <BaseLink router={this.props.router} routeName="settings">
                        </BaseLink>                    
                    </Menu.Item>
                </Menu>
            </Sider>

        );
    }
}



export default connect(state => ({ router: state.router.route}))(SideNavigator)
