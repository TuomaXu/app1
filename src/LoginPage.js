import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox, Row, Col
} from 'antd';

import { connect } from 'dva';


class LoginPage extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { dispatch } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>登陆</h1>
        <div style={{ width: '300px', margin: '0 auto' }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block className="login-form-button"
                onClick={() => {
                  dispatch({
                    type:'account/changeType',
                    payload:{
                      loginType:2
                    }
                  })
                }}
              >
                没有账号，去注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    );
  }
}

export default connect(({account})=>{
  return account;
})(Form.create()(LoginPage));