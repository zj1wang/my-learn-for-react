import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Link,BrowserRouter,Route,Redirect, Switch} from 'react-router-dom'
import RouterTest from './component/RounterTest'
import ReduxDemo from './component/ReduxDemo'

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store= {store}> 
                <BrowserRouter>
                <Link to='/jump1/'>路由跳转通讯</Link>
                <hr/>
                <Link to='/jump2'>组件通过Redux通讯</Link>
                <hr/>
                    <Switch>
                    <Route path='/jump1' component={RouterTest}/>
                    <Route path='/jump2' component={ReduxDemo}/>


                    <Redirect to=''/>
                    </Switch>
                </BrowserRouter>
                </Provider>
            </div>
            
            
            
        )
    }

}
