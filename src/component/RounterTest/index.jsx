import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import RouterAgain from './RouterAgain'
import RouterAgain2 from './RouterAgain2'


export default class RouterTest extends Component {
    state={value:undefined}
    show=()=>{
        this.setState({value:this.value1.value})
    }
    show2=()=>{
        this.setState({value2:this.value2.value})
    }
    render() {
        return (
            <div>
                <input ref={(c)=>(this.value1=c)} onChange={this.show} placeholder='此处输入内容1组件'></input>
                <input ref={(c)=>(this.value2=c)} onChange={this.show2} placeholder='此处输入内容2组件'></input>

                <Link to={`/jump1/jump-agin/${this.state.value}`}>显示🎧路由1</Link> ********  
                <Link to={`/jump1/jump-agin2/${this.state.value2}`}>显示🎧路由2</Link>
                
                <Route path='/jump1/jump-agin/:id' component={RouterAgain}/>
                <Route path='/jump1/jump-agin2/:id' component={RouterAgain2}/>

               
                
            </div>
        )
    }
}
