import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import { Form, Row, Col, Input, Button, Icon, Layout, Switch } from 'antd';

const { Content } = Layout;

const FormItem = Form.Item;

class SettingGeneral extends Component {
    state = {
        expand: false,
        zipcode: this.props.zipCode,
        loading: false,
        iconLoading: false
    };


    // componentDidMount () {
    //     this.setState({ zipcode: this.props.zipCode });
    // }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
        console.log(this.state);
    };

    zipCodeChange = (e) => {
        this.setState({ zipcode: e.target.value });
        console.log("new state", this.state)
    };



    handleSearch = e => {
        e.preventDefault();
        // set the zipcode in the reducer
    };


    // Button OnPress
    saveZipCode = () => {
        console.log('state', this.state, this.props)

        this.props.zipCodeChange(this.state.zipcode)
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
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
                                        : 'none'
                                }}
                            >
                                <FormItem label="Zipcode">
                                    <Input
                                        placeholder="Zipcode"
                                        onChange={this.zipCodeChange}
                                        value={this.state.zipcode}
                                    />
                                </FormItem>
                                <Button
                                    type="primary"
                                    loading={this.state.loading}
                                    onClick={() => this.props.zipCodeChange(this.state.zipcode)}
                                >
                                    Click me!
                                </Button>
                            </Col>

                        </Row>
                        <Row>
                            <Col span={24} style={{ textAlign: 'right' }}>
                               
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

const mapStateToProps = ({
    generalSettingsReducer,
    permanentSettingsReducer
}) => {
    const { loadingWeather, weather, weatherError } = generalSettingsReducer;
    const { zipCode } = permanentSettingsReducer;
    return { loadingWeather, weather, weatherError, zipCode };
};

export default connect(
    mapStateToProps,
    actions
)(SettingGeneral);
