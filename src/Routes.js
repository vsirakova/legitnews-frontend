import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link
}
from 'react-router-dom'

import Header from './components/Header'
// Views
import Home from './views/Home'
import NewsDetail from './views/NewsDetail'

export default class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='row'>
				<Header />
            	<div className='col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
					<Router>
						<div>
						<Route exact path='/' component={Home} /> 
						<Route exact path='/news/:id' component={NewsDetail} /> 
						</div>
					</Router>
                </div>
            </div>
        )
    }
}
