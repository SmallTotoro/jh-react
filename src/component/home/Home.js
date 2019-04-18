import React, {Component} from 'react';
import {Tabs} from 'antd'
import PluginConfig from "../ruleMng/PluginConfig/PluginConfig";
import {Layout} from "antd/lib/index";

const {Content} = Layout;

const TabPane = Tabs.TabPane;

class Home extends Component {

    constructor(props) {
        super(props);
        this.newTabIndex = 0;

        const panes = [
            {title: '首页', content: 'welcome to ruleMng', key: '1', closable: false},
            {title: '插件配置', content: <PluginConfig/>, key: '2'},

        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }


    onChange = (activeKey) => {
        this.setState({activeKey});
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: 'New Tab', content: 'Content of new Tab', key: activeKey});
        this.setState({panes, activeKey});
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({panes, activeKey});
    }


    render() {
        return (

            <Tabs
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {this.state.panes.map(pane =>
                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>

                        {pane.content}

                    </TabPane>)}
            </Tabs>

        );
    }
}

export default Home;