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

    	console.log('side navigator', this.props.router, "state", this.state)

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
    					<BaseLink router={this.props.router} routeName="Home" />   
    				</Menu.Item>
    				<Menu.Item key="9">
    					<Icon type="file" />
    					<span>YNAB</span>
    					<BaseLink router={router} routeName="YNAB" />  
    				</Menu.Item>
    				<Menu.Item key="22" onClick={() => console.log("setting")}>
    					<Icon type="setting" />
    					<span>Calendar</span>
    					<BaseLink router={router} routeName="Calendar" />                 
    				</Menu.Item>
    				{/* {this.renderSideBarItems(this.props.sideItems)} */}
    				<Menu.Item key="10" onClick={() => console.log("setting")}>
    					<Icon type="setting" />
    					<span>Settings</span>
    					<BaseLink router={this.props.router} routeName="Settings" />                    
    				</Menu.Item>
    			</Menu>
    		</Sider>

    	);
    }
}





export default connect(state => ({ router: state.router.route }))(SideNavigator)
