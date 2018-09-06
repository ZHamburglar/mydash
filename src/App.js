import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from './actions';

import { bindActionCreators } from 'redux';

import { Layout, Menu, Icon, Breadcrumb } from 'antd';


//Sidebar Components
import SideNavigator from './routes/SideNav';

import MainHeader from './routes/MainHeader';

// const mapStateToProps = ({ sidebarOCReducer, sideBarReducer }) => {
//   const { sidebarOpen, docked } = sidebarOCReducer
//   const { sideItems } = sideBarReducer
//   return { sideItems }
// }


import Main from './routes/Main'
const { Content, Footer, Sider, Header } = Layout;
const SubMenu = Menu.SubMenu;

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
    				 				<main>
    									<Main />
    				 				</main>
    				 			</div>
    				 		</Content>
    				</Layout>
    			</Layout>
    		</Layout>

    	)
    }
}

// const mapStateToProps = (state) => ({ emails: state.emails})

export default connect()(App)
