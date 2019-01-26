import React, { Component } from 'react'
import { connect } from 'dva';

import {
  Table
} from 'antd';

const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '电话',
    dataIndex: 'tel',
    key: 'tel',
  }, {
    title: '状态',
    dataIndex: 'access_token',
    render:(text, record, index)=>{
      console.log()
      return text?'已注册':'未注册'
    }
  }];

class TeacherPage extends Component {

  componentDidMount(){
    this.props.dispatch({type:'teacher/load'});
  }

  render() {
    const { items } = this.props; 
    return (
      <div>
        <Table rowKey={record => record.id} dataSource={items} columns={columns} />
      </div>
    )
  }
}

export default connect(({teacher})=>{
  console.log(teacher);
  return teacher;
})(TeacherPage);
