import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import style from './NormalLoginForm.css';
import logo from '../../logo.svg';
import {withRouter} from "react-router-dom";

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //缓存登录状态
                localStorage.setItem('user', JSON.stringify(values));
            }
        });
        this.props.history.push('/home');
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Form onSubmit={this.handleSubmit} className={style.loginform}>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm);