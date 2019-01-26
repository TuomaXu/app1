import {
  addStudentURL,
  studentListURL
} from './urlconfig';

import axios from 'axios';

import { notification } from 'antd';


export default {

  namespace: 'student',

  state: {
      items:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *load({ payload }, { call, put }){
      const res = yield call(axios.post,studentListURL);
      console.log(res);
      const r = res.data;
      if(r.success === false){
          console.log(r.code);
          return;
      }

      yield put({type:'save',payload:r.data})


    },
    *add({ payload }, { call, put }){
      const res = yield call(axios.post,addStudentURL,payload);
      const r = res.data;
      if(r.success === false){
          console.log(r.code);
          return;
      }

      notification.open({
        message: '添加成功'
      });
      

    }
  },

  reducers: {
    save(state, action) {
        console.log(action);
      return { items:action.payload };
    },
  },

};
