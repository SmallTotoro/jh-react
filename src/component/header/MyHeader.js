import React, {Component} from 'react';
import {Layout, Menu, Button} from 'antd';
import {NavLink} from "react-router-dom";

const {Header} = Layout;

const menu = [{
    path: '/home',
    title: 'Home'
}, {
    path: '/about',
    title: 'About'
}];

//构建头部导航菜单
function TopMenu(props) {
    const menus = props.menus;
    const listItems = menus.map((m, index) =>
        <Menu.Item key={index}>
            <NavLink to={m.path}> {m.title}</NavLink>
        </Menu.Item>
    );
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{lineHeight: '64px'}}
        >
            {listItems}
        </Menu>
    )
}

//登录按钮
function LoginButton(props) {
    return (
        <Button style={{float: 'right'}} onClick={props.onClick}>
            Login
        </Button>
    );
}

//退出按钮
function LogoutButton(props) {
    return (
        <Button style={{float: 'right'}} onClick={props.onClick}>
            Logout
        </Button>
    );
}

class MyHeader extends Component {

    constructor(props) {
        super(props);
        //局部状态
        this.state = {isLoggedIn: false};
        //绑定点击事件
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    logout() {
        console.log("logout==》" + window.localStorage.getItem('user'));
        //移除登录信息
        localStorage.removeItem('user');
        //跳转登录页？？
        //this.props.history.push('/login');
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        console.log(this)
        //this.props.history.push('/login');
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (<Header className="header">
            <div className="logo"/>
            <TopMenu menus={menu}/>
            {button}
        </Header>);
    }

}

export default MyHeader;