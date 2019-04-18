import React from 'react'
import {Form,Input} from 'antd'

class AddAttributeForm extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form layout="vertical" hideRequiredMark onSubmit={this.props.handleSubmit}>
                <Form.Item label="属性编码">
                    {getFieldDecorator('id', {})(<Input placeholder="" allowClear/>)}
                </Form.Item>
                <Form.Item label="属性名称">
                    {getFieldDecorator('name', {})(<Input placeholder="" allowClear/>)}
                </Form.Item>
                <Form.Item label="属性类型">
                    {getFieldDecorator('type', {})(<Input placeholder="" allowClear/>)}
                </Form.Item>
                <Form.Item label="属性说明">
                    {getFieldDecorator('description', {})(<Input placeholder="" allowClear/>)}
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(AddAttributeForm)