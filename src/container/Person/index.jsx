import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import createAddPersonAction from '../../redux/person_action'

class Person extends Component {
    addPerson=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name:name,age:age}
        this.props.addPerson(personObj)
        this.nameNode.value=''
        this.ageNode.value=''

    }
    render() {
        return (
            <div>

                <input ref={(c)=>{this.nameNode=c}} type="text" placeholder="输入名字"/>
                <input ref={(c)=>{this.ageNode=c}} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.persons.map(personObj=>(
                        <li key ={personObj.id}>姓名：{personObj.name} 年龄：{personObj.age}</li>
                    ))}
                </ul>
                <h2>上方组件求和为：{this.props.count}</h2>
            </div>
        )
    }
}
export default connect(
    state=>({persons: state.person,
    count:state.count}),
    {addPerson:createAddPersonAction}
)(Person)
