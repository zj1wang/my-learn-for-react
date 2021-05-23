import React, { Component } from 'react'

export default class RouterAgain2 extends Component {
    render() {
        return (
            <div>
                <h2>我是输入框2组件</h2>
                <h2>输入内容为：{this.props.match.params.id}</h2>
            </div>
        )
    }
}
