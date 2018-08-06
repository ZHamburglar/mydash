import React, { Component } from 'react';

import { Form, Row, Col, Input, Button, Icon, Layout, Switch } from 'antd';

const { Content } = Layout;

const FormItem = Form.Item;

class SettingComponent extends Component {
  state = {
    expand: false
  };

  componentWillUnmount() {}

  onChange = () => {
    console.log('this was changed');
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
          <Switch onChange={this.onChange} />
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

export default SettingComponent;
