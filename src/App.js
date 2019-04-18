import React from 'react';

import './App.css';
import NormalLoginForm from './component/login/NormalLoginForm';
import About from './component/about/About';
import Home from './component/home/Home';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from "./component/header/MyHeader";

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink
} from "react-router-dom";
import PluginConfig from "./component/ruleMng/PluginConfig/PluginConfig";
import RuleMng from "./component/ruleMng/ruleMng/RuleMng";

const {SubMenu} = Menu;
const {Content, Sider} = Layout;
const routes = [
    {
        path: "/login",
        component: NormalLoginForm,
        exact: true
    },
    {
        path: "/home",
        component: Home,
        exact: true
    },
    {
        path: "/about",
        component: About,
        exact: true
    },
    {
        path: "/rule/pluginConfig",
        component: PluginConfig,
        exact: true
    },
    {
        path: "/rule/ruleMng",
        component: RuleMng,
        exact: true
    }
];

function RouteGen(route) {
    return <Route path={route.path} component={route.component}/>;
}

function App() {
    return (
        <Layout>
            <Router>
                <MyHeader/>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="notification"/>规则配置</span>}>
                                <Menu.Item key="1"> <NavLink to='/rule/pluginConfig'>插件配置</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to='/rule/ruleMng'>规则管理</NavLink></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>规则生命周期管理</span>}>
                                <Menu.Item key="5">规则配置申请</Menu.Item>
                                <Menu.Item key="6">规则审核</Menu.Item>
                                <Menu.Item key="7">规则测试</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="user"/>规则视图</span>}>
                                <Menu.Item key="9">管理规则视图</Menu.Item>
                                <Menu.Item key="10">过程规则视图</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 580,
                        }}
                        >
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                                {routes.map((route, index) => {
                                    return <RouteGen key={index} {...route} />;
                                })}
                            </Switch>

                        </Content>
                    </Layout>

                </Layout>
            </Router>
        </Layout>
    );
}

export default App;
