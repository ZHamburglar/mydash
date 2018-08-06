import React, { Component } from 'react';

import { Form, Row, Col, Input, Button, Icon, Layout, Switch } from 'antd';

const { Header, Content, Sider } = Layout;


const FormItem = Form.Item;



class SettingGeneral extends Component {

    state = {
        expand: false,
      }

    componentWillUnmount() {
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        });
      }

      toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
        console.log(this.state)
      }

    onChange = () => {
        console.log('this was changed')
    }




render() {
    return (
      <div>
                  
        <Content style={{ background: '#f0f2f5', padding: 24, margin: 0 }}>

            Location
            <Switch onChange={this.onChange} />

            <Form
            className="ant-advanced-search-form"
            onSubmit={this.handleSearch}
            >
                <Row>
                    <Col span={8} key={1} style={{ display: this.state.expand ? 'block' : 'none' }}>
                        <FormItem label={"Zipcode"}>
                        
                            <Input placeholder="Zipcode" />

                        
                        </FormItem>
                    </Col>
                    
                </Row>

    

        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">Search</Button>

            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
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


export default SettingGeneral;