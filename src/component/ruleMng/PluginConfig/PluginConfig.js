import React, {Component} from 'react';
import {Button, Card, Input, Table, Divider, Form, Radio, Modal, Row, Col, Drawer, Select, DatePicker} from 'antd'
import AddPluginForm from "./AddPluginForm";
import AddAttributeForm from "./AddAttributeForm";
import reqwest from 'reqwest';

const {Option} = Select;

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const {TextArea} = Input;

class PluginConfig extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerVisible: false,
            data: [],
            pagination: {},
            loading: false,
        }

    }

    showDrawer = () => {
        this.setState({
            drawerVisible: true,
        });
    };

    onClose = () => {
        this.setState({
            drawerVisible: false,
        });
    };

    componentDidMount() {
        this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = {...this.state.pagination};
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({loading: true});
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = {...this.state.pagination};
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    }

    render() {

        // const dataSource = [
        //     {
        //         key: '1',
        //         id: 'CUST_AABB_11',
        //         name: '客户标签列表',
        //         type: '列表',
        //         description: '某客户所属标签'
        //     }, {
        //         key: '2',
        //         id: 'CUST_AABB_12',
        //         name: '客户标签列表',
        //         type: '列表',
        //         description: '某客户所属标签'
        //     }];
        //
        // const columns = [
        //     {
        //         title: '属性编码',
        //         dataIndex: 'id',
        //         key: 'id',
        //     }, {
        //         title: '属性名称',
        //         dataIndex: 'name',
        //         key: 'name',
        //     }, {
        //         title: '属性类型',
        //         dataIndex: 'type',
        //         key: 'type',
        //     }, {
        //         title: '属性说明',
        //         dataIndex: 'description',
        //         key: 'description',
        //     }, {
        //         title: '操作',
        //         key: 'action',
        //         render: (text, record) => (
        //             <span>
        //               <a href="javascript:;">修改</a>
        //               <Divider type="vertical"/>
        //               <a href="javascript:;">取消</a>
        //         </span>
        //         ),
        //     }
        //
        // ];

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            render: name => `${name.first} ${name.last}`,
            width: '20%',
        }, {
            title: 'Gender',
            dataIndex: 'gender',
            width: '20%',
        }, {
            title: 'Email',
            dataIndex: 'email',
        }];

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
                <Drawer
                    title="新增"
                    width={500}
                    onClose={this.onClose}
                    visible={this.state.drawerVisible}
                >
                    <AddAttributeForm/>

                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.onClose} style={{marginRight: 8}}>
                            取消
                        </Button>
                        <Button onClick={this.onClose} type="primary">
                            提交
                        </Button>
                    </div>

                </Drawer>

                <AddPluginForm formItemLayout={formItemLayout} dataSource={this.state.data}
                               columns={columns} showDrawer={this.showDrawer}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               handleTableChange={this.handleTableChange}/>

            </div>

        );
    }
}

export default PluginConfig;