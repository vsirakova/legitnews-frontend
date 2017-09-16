import React from 'react'
export default class LegitHeader extends React.Component{
    constructor(props){
        super(props)
        

		var date = new Date(Date.UTC(2013, 1, 1, 14, 0, 0));  
		var options = {  
			weekday: "long", year: "numeric", month: "short",  
			day: "numeric", hour: "2-digit", minute: "2-digit"  
		}; 
		this.state = {
			date : date.toLocaleTimeString("en-us", options)
		}
		
    }
    render () {
        return (
			<div style={{padding:20,background:'#d8d8d8',marginBottom:30}} className='row'>
				<div className='col-xs-6'>
					<a style={{color:'#fff'}} href='/'><img src='assets/logo.png' style={{width:150}} /></a>
				</div>
				<div className='col-xs-6 text-right'>
					<span style={{fontSize:18}}>
						{this.state.date}
					</span>
				</div>
				
			</div>
                )
    }
}