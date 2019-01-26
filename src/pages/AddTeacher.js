import React, { Component } from 'react'
import { connect } from 'dva';
import {
  Form, Icon, Input, Button, Alert,
} from 'antd';

class AddTeacher extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({
          type:'teacher/add',
          payload:values
        })
      }
    });
  }


  render() {

    const { error, dispatch } = this.props;
    const { getFieldDecorator } = this.props.form;

    
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          label='姓名'
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label='电话'
        >
          {getFieldDecorator('tel', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
        >
          <Button style={{marginLeft:'80px'}} type="primary" htmlType="submit" >
            添加
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

const formItemLayout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8 ,
  },
};

export default connect()(Form.create()(AddTeacher))
