import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from './actions';

import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';


import { Menu, Icon } from 'antd';

class SBYNAB extends Component {

  render() {
    return (
        <Menu.Item key="44" onClick={() => this.props.changePageYNAB()}>
            <Icon type="file" />
            <span>YNAB</span>
        </Menu.Item>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePageYNAB: () => push('/ynab')
  }, dispatch)


export default connect(null, mapDispatchToProps)(SBYNAB);