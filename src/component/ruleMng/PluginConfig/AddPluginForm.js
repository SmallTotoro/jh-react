import React from 'react'
import {Form, Input, Card, Button, Table, Modal} from 'antd'
import {Radio} from "antd/lib/index";

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const {TextArea} = Input;

class AddPluginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            drawerVisible: false
        }
        this.msg = '';
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.msg = JSON.stringify(values)
                this.showModal();
            }
        });
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    }



    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <>
                <Modal
                    title="提示信息"
                    visible={this.state.modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="关闭"
                >
                    <p>{this.msg}</p>
                </Modal>
                <Form  {...this.props.formItemLayout} onSubmit={this.handleSubmit}>
                    <Card title="插件配置" bordered={false}>
                        <Form.Item label="插件名称">
                            {getFieldDecorator('plugName', {})(<Input placeholder="获取某客户标签" allowClear/>)}
                        </Form.Item>
                        <Form.Item label="插件类型">
                            {getFieldDecorator('plugType', {
                                initialValue: 2
                            })(
                                <RadioGroup name="radiogroup">
                                    <Radio value={1}>JAVA</Radio>
                                    <Radio value={2}>通用SQL</Radio>
                                </RadioGroup>
                            )}
                        </Form.Item>
                        <Form.Item label="SQL">
                            {getFieldDecorator('sql', {})(
                                <TextArea rows={4}/>
                            )}
                        </Form.Item>
                    </Card>

                    <Card title="" bordered={false}>
                        <RadioGroup defaultValue="1">
                            <RadioButton value="1">返回参数</RadioButton>
                            <RadioButton value="2">入参</RadioButton>
                        </RadioGroup>
                        <Button style={{float: 'right'}} onClick={this.props.showDrawer}>新增</Button>
                        <Table  columns={this.props.columns}
                                dataSource={this.props.dataSource}
                                pagination={this.props.pagination}
                                loading={this.props.loading}
                                onChange={this.props.handleTableChange}
                        />
                        <Button type="primary" htmlType="submit">提交</Button> <Button>返回</Button>
                    </Card>
                </Form>
            </>
        )
    }
}

export default Form.create()(AddPluginForm)