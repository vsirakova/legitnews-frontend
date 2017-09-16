import React from 'react'
import Routes from './Routes'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'babel-polyfill'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render() { 
        return (
		<MuiThemeProvider>
			<Routes />
			</MuiThemeProvider>
			)
    }
}