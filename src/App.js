import React, {Component} from 'react';

import './App.css';
import NormalLoginForm from './component/login/NormalLoginForm';
import About from './component/about/About';
import Home from './component/home/Home';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import MyHeader from "./component/header/MyHeader";

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
