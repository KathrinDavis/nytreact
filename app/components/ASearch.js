import React from "react";

class Search extends Component{
	constructor(){
		super();
		this.state= {
			term:"",
			startYear:"",
			endYear:""
		};
	}
	handleChange(event){
		var newState ={};
		newState[event.target.id] =event.target.value;
		this.setState(newState);
	}
	setTerm(event){
		this.setState({
			searchTerm: term +"&begin_date="+startYear+"0101&end_date="+endYear+"0101"
		});
	}
	handleSubmit(event){
		event.preventDefault();
		this.props.setTerm(this.state.term+"&begin_date="+this.state.startYear+"0101&end_date="+this.state.endYear+"0101");
	
	}
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-primary">
				          	<div className="panel-heading">
						    	<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
		          			</div>
							<div className="panel-body">
								<form onSubmit={this.handleSubmit} role="form">
									<div className="form-group">
										<label for="search">Search Term:</label>
										<input type="text" value={this.state.term} className="form-control" id="search-term" onChange={this.handleChange} required/>
		              				</div>
							        <div className="form-group">
							            <label for="start-year">Start Year:</label>
							            <input type="text" value={this.state.startYear} className="form-control" id="start-year" onChange={this.handleChange} required/>
							        </div>
							        <div className="form-group">
							            <label for="end-year">End Year:</label>
							            <input type="text" value={this.state.endYear} className="form-control" id="end-year" onChange={this.handleChange} required/>
							        </div>
							        <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
						          	<button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
		            			</form>
		            		</div>
		         		</div>
		        	</div>
		      	</div>
		    		
				<div className="row">
		      		<div className="col-sm-12">
		        	<br/>
		        		<div className="panel panel-primary">
		          			<div className="panel-heading">
		           				<h3 className="panel-title"><strong><i className="fa fa-table"></i>Results</strong></h3>
		          			</div>
			         		<div className="panel-body" id="well-section">
			         			<div>{this.props.results}</div>
			          		</div>
		        		</div>
		      		</div>
		    	</div>

		    </div>
		)
	}
}

export default ASearch;