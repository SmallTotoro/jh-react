import React from 'react';

import './App.css';
import NormalLoginForm from './component/login/NormalLoginForm';
import About from './component/about/About';
import Home from './component/home/Home';
import {Layout, Menu} from 'antd';
import MyHeader from "./component/header/MyHeader";

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import RuleMng from "./component/ruleMng/ruleMng/RuleMng";
import RuleCheck from "./component/ruleMng/ruleCheck/RuleCheck";

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

function App() {

    function RouteGen(route) {
        return <Route path={route.path} component={route.component}/>;
    }

    return (
        <Layout>
            <Router>
                <MyHeader/>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/login"/>}/>
                    {routes.map((route, index) => {
                        return <RouteGen key={index} {...route} />;
                    })}
                </Switch>
            </Router>
        </Layout>
    );
}

export default App;
