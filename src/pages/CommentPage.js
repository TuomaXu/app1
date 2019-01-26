import React, { Component } from 'react'
import { connect } from 'dva';

import {
  Table
} from 'antd';

const columns = [
  {
    title: '评价编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '课程名&讲师',
    dataIndex: 'course',
    key: 'course',
    render:(course)=>{
      return course.name + ' '+ course.teacher.name;
    }
  }, {
    title: '评分',
    dataIndex: 'range',
    key: 'range',
  },
  {
    title:'评价内容',
    dataIndex:'desc',
    key:'desc',
  }
];

class TeacherPage extends Component {

  componentDidMount(){
    this.props.dispatch({type:'comment/load'});
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

export default connect(({comment})=>{
  return comment;
})(TeacherPage);
