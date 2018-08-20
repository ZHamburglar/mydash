import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from './actions';

import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';


import { Menu, Icon } from 'antd';

class SBCalendar extends Component {

  render() {
    return (
        <Menu.Item key="44" onClick={() => this.props.changePageCalendar()}>
            <Icon type="file" />
            <span>Calendar</span>
        </Menu.Item>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePageCalendar: () => push('/calendar')
  }, dispatch)


export default connect(null, mapDispatchToProps)(SBCalendar);