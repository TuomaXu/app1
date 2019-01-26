import React, { Component } from 'react'
import { connect } from 'dva';

import {
  Form, Icon, Input, Button, Alert,
} from 'antd';



 class LoginPage extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({
          type:'user/login',
          payload:values
        })
      }
    });
  }
  
  render() {
    const { error, dispatch } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{maxWidth:'300px',margin:'auto'}} >
      <h1>XX平台登录</h1>
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
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        {error !== ''?(
            <Alert 
              type='error'
              closable 
              message={error} 
              onClose={()=>{
                dispatch({type:'user/cleanError'})
              }}/>
          ):null}
        <Form.Item>
          <Button block type="primary" htmlType="submit" >
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default connect(({user})=>{
  return user;
})(Form.create()(LoginPage))
