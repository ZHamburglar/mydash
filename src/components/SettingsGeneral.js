import React, { Component } from 'react';

import { connect } from 'react-redux';

// import zipCode from 'formvalidation/validators/zipCode';

import * as actions from '../actions';

import { Form, Row, Col, Input, Button, Icon, Layout, Switch } from 'antd';

const { Content } = Layout;

const FormItem = Form.Item;

class SettingGeneral extends Component {
    state = {
        expand: false,
        zipcode: this.props.zipCode,
        loading: false,
        iconLoading: false,
        zipError: false
    };


    // componentDidMount () {
    //     this.setState({ zipcode: this.props.zipCode });
    // }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
        console.log(this.state);
    };


    // Need to add form validation for Zipcodes
    zipCodeChange = (e) => {
        var isValid = false;
        isValid = /^\d{4,5}([\-]?\d{4})?$/.test(this.state.zipcode);
        if ( isValid === true ){
            this.setState({ zipError: false, zipcode: e.target.value });
            console.log("correct state", this.state)
        } else {
            this.setState({ zipError: true, zipcode: e.target.value });
            console.log("wrong state", this.state)
        }
    };



    handleSearch = e => {
        e.preventDefault();
        // set the zipcode in the reducer
    };


    // Button OnPress
    saveZipCode = () => {
        var isValid = false;
        isValid = /^\d{4,5}([\-]?\d{4})?$/.test(this.state.zipcode);
        console.log(isValid)
        if ( isValid === true ){
            this.setState({ zipError: false });
            this.props.zipCodeChange(this.state.zipcode)
        } else {
            this.setState({ zipError: true });
        }

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
                                <FormItem>
                                    <Button
                                        type="primary"
                                        loading={this.state.loading}
                                        onClick={() => this.saveZipCode()}
                                    >
                                        Click me!
                                    </Button>
                                </FormItem>
                                
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
