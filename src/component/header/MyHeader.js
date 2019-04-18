import React, {Component} from 'react';
import {Layout, Menu, Button, Row, Col, Icon} from 'antd';
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
            <NavLink to={m.path}/>{m.title}
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


class MyHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header className="header">
                <Row>
                    <Col span={3} style={{color: 'white'}}>
                        WJH React Demo
                    </Col>
                    <Col span={19}>
                        <TopMenu menus={menu}/>
                    </Col>
                    <Col span={2} style={{color: 'white'}}>
                        <Icon type="logout" style={{fontSize: 20}}/> 退出
                    </Col>
                </Row>
            </Header>
        );
    }

}

export default MyHeader;