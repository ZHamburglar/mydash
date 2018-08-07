import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions'

import { Form, Row, Col, Input, Button, Icon, Layout, Switch } from 'antd';

const { Content} = Layout;

const FormItem = Form.Item;



class SettingGeneral extends Component {
    state = {
        expand: false,
        zipcode: ''
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

    zipcodeChange = (e) => {
        this.props.zipCodeChange(e.target.value)

    }

    handleSearch = e => {
        e.preventDefault();
        // set the zipcode in the reducer
    };

    render() {
        return (
            <div>
                <Content
                    style={{ background: '#f0f2f5', padding: 24, margin: 0 }}
                >
                    Location
                    <Switch onChange={this.onChange} />
                    <Form
                        className="ant-advanced-search-form"
                        onSubmit={this.handleSearch}
                    >
                        <Row>
                            <Col
                                span={8}
                                key={1}
                                style={{
                                    display: this.state.expand
                                        ? 'block'
                                        : 'none',
                                }}
                            >
                                <FormItem label="Zipcode">
                                    <Input placeholder="Zipcode" onChange={value => this.zipcodeChange(value)} value={this.props.zipCode}/>
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
                                    Collapse{' '}
                                    <Icon
                                        type={this.state.expand ? 'up' : 'down'}
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Form>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = ({ generalSettingsReducer }) => {
    const { loadingWeather , weather, weatherError, zipCode } = generalSettingsReducer
    return { loadingWeather , weather, weatherError, zipCode }
  }

export default connect(mapStateToProps, actions)(SettingGeneral);
