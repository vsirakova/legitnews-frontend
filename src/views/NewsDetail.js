import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class NewsCard extends React.Component{
	constructor(props){
		super(props)
		this.state = {params:this.props.match.params}
		console.log(this.state.params)
	}

	render () {
		return (
			<Card style={{marginBottom:30}}>
				<CardHeader
				title="URL Avatar"
				subtitle="Subtitle"
				avatar=""
				style={{height:200}}
				/>
				<CardMedia
				overlay={<CardTitle title={this.props.heading ? this.props.heading : ''} subtitle={this.props.label ? this.props.label : ''} />}
				>
				<img src={this.props.image ? this.props.image : ''} alt="" />
				</CardMedia>
				<CardTitle title={this.props.heading} subtitle={this.props.label ? this.props.label : ''} />
				<CardText>
				{this.props.description ? this.props.description : 'No description'}
				</CardText>
				<CardActions>
				<FlatButton label="Read More ..." onClick={()=>{
					window.location = '#/news/213'
					}} />
				</CardActions>
			</Card>
		)
	}
}
