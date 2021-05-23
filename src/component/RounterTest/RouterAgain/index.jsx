import React, { Component } from 'react'

export default class RouterAgain extends Component {
    render() {
        return (
            <div>
                <h3>我是1组件</h3>
                <h2>path传递参数为:{this.props.match.params.id}
                   </h2>
            </div>
        )
    }
}
