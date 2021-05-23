import React, { Component } from 'react'
import Count from '../container/Count'
import Person from '../container/Person'

export default class ReduxDemo extends Component {
    render() {
        return (
            <div>
                <Count></Count>
                <hr/>
                <Person></Person>
            </div>
        )
    }
}
