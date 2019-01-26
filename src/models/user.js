import axios from 'axios';



export default {

    namespace: 'user',
  
    state: {
      isLogin:false,
      error:'',
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
      *login({ payload }, { call, put }){
        const { username, password} = payload;
        console.log(payload)
        if(username === 'admin' && password === '1234'){
          yield put({
            type:'save',
            payload:{
              isLogin:true,
            }
          })
        }else{
          console.log(222);
          yield put({
            type:'save',
            payload:{
              error:'用户名或密码错误！',
            }
          })
        }
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      cleanError(state,action){
        return {
          ...state,
          ...{error:''}
        }
      },
      logout(state,action){
        return {
          isLogin:false,
          error:'',
        }
      }
    },
  
  };
  