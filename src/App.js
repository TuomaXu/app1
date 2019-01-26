import React ,{ Component } from 'react';

import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';




import LoginPage from './pages/LoginPage';
import DataPage from './pages/DataPage';
import CommentPage from './pages/CommentPage';
import CoursePage from './pages/CoursePage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import AddTeacher from './pages/AddTeacher';
import AddStudent from './pages/AddStudent';

import { 
    Layout,
    Menu,
} from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;



class HomeBase extends Component {
  render() {
    const { isLogin, dispatch } = this.props;

    if(isLogin === false){
        return <LoginPage />
    }

    return (
        <div>
            <Layout>
                <Sider>
                    <h1 style={{backgroundColor:'white'}}>平台管理系统</h1>
                    <Menu 
                        defaultSelectedKeys={['/']}
                        mode='inline'
                        onClick={({key})=>{
                            dispatch(routerRedux.push(`${key}`));
                        }}
                    >
                        <Menu.Item key='/'>数据中心</Menu.Item>
                        <Menu.SubMenu title="教师管理">
                            <Menu.Item key='/AddTeacher'>添加教师</Menu.Item>
                            <Menu.Item key='/TeacherPage'>教师列表</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu title="学生管理">
                            <Menu.Item key='/AddStudent'>添加学生</Menu.Item>
                            <Menu.Item key='/StudentPage'>学生列表</Menu.Item>
                        </Menu.SubMenu>
                        
                        <Menu.Item key='/CoursePage'>课程列表</Menu.Item>
                        <Menu.Item key='/CommentPage'>评价列表</Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor:'white'}}>Header</Header>
                    <Content>
                    <Router history={this.props.history}>
                        <Switch>
                            <Route path="/" exact component={DataPage} />
                            <Route path="/AddTeacher" exact component={AddTeacher} />
                            <Route path="/TeacherPage" exact component={TeacherPage} />
                            <Route path="/CommentPage" exact component={CommentPage} />
                            <Route path="/CoursePage" exact component={CoursePage} />
                            <Route path="/StudentPage" exact component={StudentPage} />
                            <Route path="/AddStudent" exact component={AddStudent} />
                        </Switch>
                    </Router>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
        
    )
  }
}




export default connect(({user})=>{
    return user;
})(HomeBase);