import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import RuleMng from "../ruleMng/ruleMng/RuleMng";
import {NavLink} from "react-router-dom";
import RuleCheck from "../ruleMng/ruleCheck/RuleCheck";

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

const {SubMenu} = Menu;
const {Content, Sider} = Layout;


const routes = [
    {
        path: "/rule/ruleMng",
        component: RuleMng,
        exact: true
    },
    {
        path: "/rule/ruleCheck",
        component: RuleCheck,
        exact: true
    }
];

function RouteGen(route) {
    return <Route path={route.path} component={route.component}/>;
}

class Home extends Component {


    render() {
        return (<Layout>
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <SubMenu key="sub1" title={<span><Icon type="notification"/>规则配置</span>}>
                        <Menu.Item key="1"> <NavLink to='/rule/ruleMng'>插件配置</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='/rule/ruleCheck'>规则查询</NavLink></Menu.Item>
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
                    background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                    {}
                </Content>
            </Layout>

        </Layout>);
    }
}

export default Home;