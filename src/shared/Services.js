import request from 'superagent'

const Services = {}

Services.getArticles = () => {
	return new Promise((resolve, reject) => {
		request
			.get('/assets/articles.json')
			.set('Accept', 'application/json')
			.end(function (err, res) {
				if (err || !res.ok) {
					reject({status:false})
				} else {
					resolve({status:true,data:res.body})
				}
			});
	})
}

export default Services