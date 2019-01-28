import React ,{ Component } from 'react';

import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import { 
    Layout,
    Menu,
} from 'antd';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

import './App.css';

const {
  Header, Footer, Sider, Content,
} = Layout;



// class LoginAndRegister extends Component{


//     render(){
//         return <LoginPage />
//     }
// }
// connect(({account})=>{
//     return account;
// })(LoginAndRegister);


class HomeBase extends Component {
  render() {
    const { loginType, dispatch } = this.props;

    // if(loginType === 1){
    //     return <LoginPage />
    // }

    // if(loginType === 2){
    //     return <RegisterPage />
    // }

    return (
        <div>
            <Layout>
                <Sider theme='light'>
                    <h1>平台管理系统</h1>
                    <Menu 
                        defaultSelectedKeys={['/']}
                        mode='inline'

                        onClick={({key})=>{
                            dispatch(routerRedux.push(`${key}`));
                        }}
                    >
                        <Menu.Item key='/'>在此添加Menu</Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    
                    <Content>
                    <Router history={this.props.history}>
                        <Switch>
                            <Route path="/" exact component={()=>(<p>在此添加页面</p>)} />
                        </Switch>
                    </Router>
                    </Content>
                </Layout>
            </Layout>
        </div>   
    )
  }
}




export default connect(({account})=>{
    return account;
})(HomeBase);



