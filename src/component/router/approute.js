import React from 'react';
import {HashRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from "../home/Home";
import About from "../about/About";

const routes = [
    {
        path: '/home',
        component: Home,
        exact: true,
    },
    {
        path: '/about',
        component: About,
        exact: true,
    }
]

function AppRoute() {
    function RouteGen(route) {
        return (
            <Route path={route.path} component={route.component} exact={route.exact}/>
        )
    }

    return (
        <div>
            <Switch>
                {
                    routes.map((route, index) => {
                        return <RouteGen key={index} {...route}/>
                    })

                }
            </Switch>
        </div>
    )
}

export default AppRoute