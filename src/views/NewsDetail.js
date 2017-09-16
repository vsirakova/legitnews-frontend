import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Services from './../shared/Services'

export default class NewsCard extends React.Component{
	constructor(props){
		super(props)
		this.state = {params:this.props.match.params}

	}
	componentWillMount() {
		let self = this
		console.log(self.props)
		Services.getArticles()
		.then((result)=>{
			let newsDetail = result.data.filter((n) => {
				return n.id == self.state.params.id
			})[0]
			console.log(newsDetail)
			
			self.setState({
				title : newsDetail.header,
				image : newsDetail.image,
				description : '<p class="paragraph">'+newsDetail.paragraphs.join('</p><p class="paragraph">')+'</p>'
			})
			console.log(newsDetail[0])
			
		})
	}
	render () {
		return (
			<Card style={{marginBottom:30}}>
				<CardHeader
				title={this.state.heading ? this.state.heading : ''}
				/>
				<CardMedia
				overlay={<CardTitle title={this.state.heading ? this.state.heading : ''} subtitle={this.state.label ? this.state.label : ''} />}
				>
				<img src={this.state.image ? this.state.image : ''} alt="" />
				</CardMedia>
				<CardTitle title={this.state.heading} subtitle={this.state.label ? this.state.label : ''} />
				<CardText style={{fontSize:20,fontFamily:'Helvetica',padding:'20px 30px'}}>
					<div dangerouslySetInnerHTML={{__html:this.state.description}}>

						</div>
				
				</CardText>
				<CardActions>
					
				</CardActions>
			</Card>
		)
	}
}
