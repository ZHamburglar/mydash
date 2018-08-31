import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from './actions';

import { bindActionCreators } from 'redux';

import { Layout, Menu, Icon } from 'antd';

import Home from './routes/Home';
import Settings from './routes/Settings';
import Calendar from './routes/Calendar';

//Sidebar Components
import SideNavigator from './components/SideNav';

import MainHeader from './components/MainHeader';

// class App extends Component {


//   render() {
//       return (
//           <div>
//           <Layout style={{ minHeight: '100vh' }}>
//           <SideNavigator />


//             <Layout>
//               <MainHeader />
//               <Content style={{ margin: '0 16px' }}>

//                 <div style={{background: '#fff', minHeight: 360 }}>
//                   <main>
//                       <Main />

//                   </main>
//                   Testing here
//                 </div>
//               </Content>
//               <Footer style={{ textAlign: 'center' }}>
//                 Bear Mobile © 2018 
//               </Footer>
//             </Layout>
//         </Layout>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ sidebarOCReducer, sideBarReducer }) => {
//   const { sidebarOpen, docked } = sidebarOCReducer
//   const { sideItems } = sideBarReducer
//   return { sideItems }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


import Nav from './routes/components/Nav'
import Main from './routes/Main'
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    state = {
    collapsed: false,
  };

    render(){
        return (
            <div className="mail-client">
                <aside>
                    <Nav />
                </aside>
    
                
                
                <div>
           <Layout style={{ minHeight: '100vh' }}>
          <SideNavigator />


             <Layout>
              <MainHeader />
               <Content style={{ margin: '0 16px' }}>

                <div style={{ background: '#fff', minHeight: 360 }}>
                   <main>
                       <Main emails={this.props.emails}/>

                  </main>
                 </div>
               </Content>
              <Footer style={{ textAlign: 'center' }}>
                 Bear Mobile © 2018 
               </Footer>
             </Layout>
        </Layout>
       </div>



            </div>
        )
    }
}

const mapStateToProps = (state) => ({ emails: state.emails})

  export default connect(mapStateToProps)(App)
