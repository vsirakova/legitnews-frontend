import React from 'react'
import Routes from './Routes'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (<Routes />)
    }
}