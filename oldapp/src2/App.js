import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from './actions';


import { Layout } from 'antd';


//Sidebar Components
import SideNavigator from './routes/SideNav';
import MainHeader from './routes/MainHeader';

import Main from './routes/Main'
const { Content, Footer, Sider, Header } = Layout;

class App extends Component {
    state = {
    	collapsed: false,
    };

    render(){

    	console.log('state + props:', this.state, this.props)

    	return (
    		<Layout>
    			<MainHeader />
    			<Layout style={{ minHeight: '100vh' }}>
    				<SideNavigator />
    				<Layout style={{ padding: '24px' }}>
    				 		<Content style={{ margin: '0 16px' }}>
    							<div style={{ background: '#fff', minHeight: 360 }}>
    									<Main />
    				 			</div>
    				 		</Content>
    				</Layout>
    			</Layout>
    		</Layout>

    	)
    }
}

export default App;
