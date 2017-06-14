import React from "react";
import API from "../utils/API";
import ASearch from "../ASearch";

class SearchBox extends React.Component {
	constructor(){
		super();
		this.state= {
			term:""
		};
	}

	saveArticle(res){
		API.postArticle(res)

		API.getArticle().then(function(res){
			var component = this;
			if(res !==this.state.articles){
				var artUlo = res.map(function(a, i){
					return <div className="well" key={i}>
						<h3 className= "aHeadline">                            
							<span className="label label-success">{i + 1}</span>
							{a.title}</h3>
						<h4>{a.date}</h4>
						<a href= {a.url}>{a.url}</a>
						<input type="hidden" name="articleId" value={arts._id}/>
						<br/>
						<button onClick={() => component.deleteArticleClick(arts._id)} className="btn btn-success">Delete</button>
	                    </div>;
				})
				this.setState({articles: artUlo});
			}
		}.bind(this));
	}

	componentDidUpdate(){
		API.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
			.then(function(data){
			var artUlo = data.map(function(a, i){

		return 
		<div className="well" key={i}>
			
			<h3 className="articleHeadline">
				<span className="label label-primary">{i + 1}</span>
				{a.headline.main}</h3>
			<h5>{a.pub_date}</h5>
			<p>{a.snippet}</p>
			<a href={a.web_url}>{a.web_url}</a>

			<form method="POST" action="/api">
				<input type="hidden" name="title" value={a.headline.main}/>
				<input type="hidden" name="url" value={a.web_url}/>
				<br/>
				<button onClick={() => component.saveArticle(a)} className="btn btn-primary">Save</button>
			</form>			
		</div>;
		})
			this.setState({results: artUlo});
		}).bind(this));
	}
	setTerm(term){
		this.setState({searchTerm: term});
	}
	render(){
		return(
			<div>
			<ASearch setTerm={this.setTerm} setStartYear={this.startYear} setEndYear={this.endYear} results={this.state.results}/>
			</div>
			);
	}
});

export default SearchBox;
