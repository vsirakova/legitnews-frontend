import React from 'react'
import NewsCard from './../components/NewsCard'
import Services from './../shared/Services'
export default class Home extends React.Component {
    constructor(props) {
		super(props)
		this.state = {news:[]}
		

		
	}
	componentWillMount() {
		let self = this

		Services.getArticles()
		.then((result)=>{
			console.log(result)
			self.setState({
				news : result.data
			})
			console.log("articles result : ",result)
		})
	}
    render() {
        return (
            <div className='row' style={{display:'flex',flexWrap:'wrap'}}>
				
				{
					this.state.news.map((news,index) => {
						if(!news.image) console.log(news)
						return (
							<div className='col-sm-6' style={{display:'flex'}}>
							<NewsCard 
							key={'__'+index}
							image={news.image}
							label={news.header ? news.header.substring(0,20)+'...' : ''}
							description={news.paragraphs[1].substring(0,115)+'...'} />
							</div>
						)
					})
				}
			</div>
        )
    }
}
