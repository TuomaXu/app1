import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox, Row, Col
} from 'antd';

import { connect } from 'dva';

class RegisterPage extends React.Component {

  state = {
    type: 'login',
  }

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
        <h1>注册</h1>
        <div style={{ width: '300px', margin: '0 auto' }}>
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            hideRequiredMark
          >
            <Form.Item
              {...formItemLayout}
              label='登记姓名'
            >
              {getFieldDecorator('name')(<Input />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label='登记电话'
            >
              {getFieldDecorator('tel')(<Input />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label='登录密码'
            >
              {getFieldDecorator('password')(<Input />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label='验证码'
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('code')(<Input />)}
                </Col>
                <Col span={12}>
                  <Button
                    onClick={()=>{
                      dispatch({type:'account/getCode'});
                    }}
                  >获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" className="login-form-button">
                注册
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block className="login-form-button"
                onClick={() => {
                  dispatch({
                    type: 'account/changeType',
                    payload: {
                      loginType: 1
                    }
                  })
                }}
              >
                已有账号，去登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    );
  }
}

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

export default connect(({ account }) => {
  return account;
})(Form.create()(RegisterPage));