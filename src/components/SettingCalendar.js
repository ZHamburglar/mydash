import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'


import { Form, Row, Col, Input, Button, Icon, Layout, Switch } from 'antd';

const { Content } = Layout;

const FormItem = Form.Item;

class SettingCalendar extends Component {
  state = {
    expand: false,
    switchChecked: false
  };


  componentWillMount = () => {
    var i = this.props.sideItems.length
    while (i--) {
        if(this.props.sideItems[i] === 'Calendar') {
          return this.setState({ switchChecked: true})
      }
    }
    return this.setState({ switchChecked: false})


  }

  componentWillUnmount() {}

  onChange = (checked) => {
    console.log('this was changed', this.state);
    this.setState(checked, () => {
      if (this.state.switchChecked){
        console.log("true!")
        {this.props.addSideBarCalendar('Calendar')}
      } else {
        console.log("false")
        {this.props.removeSideBarCalendar('Calendar')}

      }
    }
  )
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
    console.log(this.state);
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  render() {
    return (
      <div>
        <Content style={{ background: '#f0f2f5', padding: 24, margin: 0 }}>
          Google Calendar
          <Switch checked={this.state.switchChecked} onChange={(checked) => this.onChange({ switchChecked: checked})} />
          <Form
            className="ant-advanced-search-form"
            onSubmit={this.handleSearch}
          >
            <Row>
              <Col
                span={8}
                key={1}
                style={{ display: this.state.expand ? 'block' : 'none' }}
              >
                <FormItem label="User">
                  <Input placeholder="Account" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col
                span={8}
                key={1}
                style={{ display: this.state.expand ? 'block' : 'none' }}
              >
                <FormItem label="Password">
                  <Input placeholder="Password" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>

                <a
                  style={{ marginLeft: 8, fontSize: 12 }}
                  onClick={this.toggle}
                >
                  Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                </a>
              </Col>
            </Row>
          </Form>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = ({ sideBarReducer }) => {

  const { sideItems } = sideBarReducer
  return { sideItems }
}

export default connect(mapStateToProps, actions)(SettingCalendar);
