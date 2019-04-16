import React, {Component} from 'react';
import {Button, Card, Input, Table, Divider, Form, Radio} from 'antd'

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const {TextArea} = Input;

class RuleCheck extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const dataSource = [{
            key: '1',
            id: 'CUST_AABB_11',
            name: '客户标签列表',
            type: '列表',
            description: '某客户所属标签'
        }, {
            key: '2',
            id: 'CUST_AABB_12',
            name: '客户标签列表',
            type: '列表',
            description: '某客户所属标签'
        }];

        const columns = [{
            title: '属性编码',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '属性名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '属性类型',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '属性说明',
            dataIndex: 'description',
            key: 'description',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                      <a href="javascript:;">修改</a>
                      <Divider type="vertical"/>
                      <a href="javascript:;">取消</a>
                </span>
            ),
        }
        ];
        const onChange = (e) => {
            console.log(e);
        };
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
        };
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Form  {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Card title="插件配置" bordered={false}>
                        <Form.Item label="插件名称">
                            <Input placeholder="获取某客户标签" allowClear/>
                        </Form.Item>
                        <Form.Item label="插件类型">
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>JAVA</Radio>
                                <Radio value={2}>通用SQL</Radio>
                            </RadioGroup>
                        </Form.Item>
                        <Form.Item label="SQL">
                            <TextArea rows={4}/>
                        </Form.Item>
                    </Card>
                    <Card title="" bordered={false}>
                        <RadioGroup defaultValue="1">
                            <RadioButton value="1">返回参数</RadioButton>
                            <RadioButton value="2">入参</RadioButton>
                        </RadioGroup>
                        <Button style={{float: 'right'}}>新增</Button>
                        <Table dataSource={dataSource} columns={columns}/>
                        <Button type="primary" htmlType="submit">提交</Button> <Button>返回</Button>
                    </Card>
                </Form>
            </div>

        );
    }
}

export default RuleCheck;