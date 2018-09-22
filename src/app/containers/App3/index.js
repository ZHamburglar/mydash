import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Layout, Col, Menu, Icon } from 'antd';

import LoadingOverlay from '../../components/LoadingOverlay';

import childRouteSelector from '../../redux/selectors/childRoute';
import Link from '../../components/Link';
// import childRouteSelector from '../../redux/selectors/childRoute';

const { Content, Header, Sider } = Layout;

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	state = { collapsed: false }

	onCollapse = (collapsed) => { this.setState({ collapsed }); }

	render() {
		const { route, childRoute } = this.props;
		console.log('App3: ', this.props);
		return (
			<div>
				<LoadingOverlay />
				<Layout>
					<Header className="header" style={{ color: '#fff' }}>
						<Col span={8} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
							Hi
						</Col>
						<Col span={8} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
							<div>myDash - {route.name}</div>
						</Col>
						<Col span={8} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
							hi
						</Col>
					</Header>
					<Layout style={{ minHeight: '100vh' }}>
						<Sider
							collapsible
							collapsed={this.state.collapsed}
							onCollapse={this.onCollapse}
						>
							<div className="logo" />
							<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
								<Menu.Item key="1">
									<Icon type="home" />
									<span>Home</span>
									<Link routeName="main" />
								</Menu.Item>
								<Menu.Item key="9">
									<Icon type="file" />
									<span>YNAB</span>
									<Link routeName="ynab" />
								</Menu.Item>
								<Menu.Item key="22">
									<Icon type="setting" />
									<span>Calendar</span>
									<Link routeName="calendar" />
								</Menu.Item>
								<Menu.Item key="10">
									<Icon type="setting" />
									<span>Settings</span>
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout style={{ padding: '24px' }}>
							<Content style={{ margin: '0 16px' }}>
								<div style={{ background: '#fff', minHeight: 360 }}>
									{ childRoute }
								</div>
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</div>
		);
	}
}

App.propTypes = {
	route: PropTypes.object,
	childRoute: PropTypes.node,
};

export default connect(childRouteSelector())(App);
