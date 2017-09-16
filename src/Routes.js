import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
}
from 'react-router-dom'

import Header from './components/Header'
// Views
import Home from './views/Home'

export default class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='row'>
            <div className='col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
                <Header />
                <Router>
                    <Route exact path='/' component={Home} /> 
                </Router>
                </div>
            </div>
        )
    }
}
