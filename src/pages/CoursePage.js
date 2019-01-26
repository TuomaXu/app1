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
    title: '课程名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '课程简介',
    dataIndex: 'desc',
    key: 'desc',
  },{
    title:'授课教师',
    dataIndex:'teacher',
    key:'teacher',
    render:(tea)=>{
      return tea.name
    }
  }
];

class TeacherPage extends Component {

  componentDidMount(){
    this.props.dispatch({type:'course/load'});
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

export default connect(({course})=>{
  return course;
})(TeacherPage);
