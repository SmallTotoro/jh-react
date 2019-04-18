import React, {Component} from 'react';
import {Skeleton} from 'antd'

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Skeleton avatar paragraph={{ rows: 4 }} />
        );
    }
}

export default About;