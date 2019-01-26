import {
  commentListURL
} from './urlconfig';

import axios from 'axios';

import { notification } from 'antd';


export default {

    namespace: 'comment',
  
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
        const res = yield call(axios.post,commentListURL);
        console.log(res);
        const r = res.data;
        if(r.success === false){
            console.log(r.code);
            return;
        }

        yield put({type:'save',payload:r.data})


      }
    },
  
    reducers: {
      save(state, action) {
          console.log(action);
        return { items:action.payload };
      },
    },
  
  };
  