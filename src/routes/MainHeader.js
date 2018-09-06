import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Col } from 'antd';

const { Header } = Layout;

class MainHeader extends Component {

	componentWillUnmount() {
	}

	render() {
		const { route } = this.props
		console.log('header props:', route)
		return (
			<Header className="header">
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{ lineHeight: '64px' }}
				>
					<Col span={8} style={{ textAlign: 'center', verticalAlign: 'middle'}}>
                    Hi
					</Col>
					<Col span={8} style={{ textAlign: 'center', verticalAlign: 'middle'}}>
						<div>myDash - {route.name}</div>
					</Col>
					<Col span={8} style={{ textAlign: 'center', verticalAlign: 'middle'}}>
                    hi
					</Col>
				</Menu>
			</Header>
		);
	}
}

const mapStateToProps = ({ router }) => {
	const {route} = router
	return { route }
}

export default connect(mapStateToProps)(MainHeader);