import axios from 'axios';

import {
  notification
} from 'antd';

export default {

    namespace: 'account',
  
    state: {
      loginType:1,//0--已登录，1--未登录，显示登录页面，2--未登录，显示注册页面
      errorCode:0,
      errorMessage:'',
    },
  
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
      *login({ payload }, { call, put }){
        
      },
      *logout({ payload }, { call, put }){
        
      },
      *register({ payload }, { call, put }){
        
      },
      *cleanError({ payload }, { call, put }){
        yield put({
          type:'save',
          payload:{
            errorCode:0,
            errorMessage:'',
          }
        })
      },
      *changeType({ payload }, { call, put }){
        yield put({
          type:'save',
          payload
        })
      },
      getCode({ payload }, { call, put }){
        notification.info({
          message:'验证码为:1234'
        })
      },

    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  