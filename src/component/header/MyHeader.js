import React, {Component} from 'react';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

class MyHeader extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
        const user = localStorage.getItem('user');
        console.log(user);
    }

    logout() {
        localStorage.removeItem('user');
        //this.props.history.push('/login');
    }

    render() {
        return (<Header className="header">
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3" onClick={this.logout}>Logout</Menu.Item>
            </Menu>
        </Header>);
    }

}

export default MyHeader;