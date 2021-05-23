import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createDecrementAction,createIncrementAction} from '../../redux/count_action'

class Count extends Component {
    add=()=>{
        this.props.addNum(this.num.value*1);
    }
    dec=()=>{
        this.props.decNum(this.num.value*1)
    }
    render() {
        return (
            <div>
                <h2>下方组件总人数为：{this.props.personNum}</h2>
                <h2>当前求和为：{this.props.he}</h2>
                <select name="num" ref={(c)=>this.num=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.dec}>点我-1</button>
            </div>
        )
    }
}
export default connect(
    state=>({he:state.count,
        personNum:state.person.length})
    ,{
        addNum:createIncrementAction,
        decNum:createDecrementAction
    }
)(Count)
