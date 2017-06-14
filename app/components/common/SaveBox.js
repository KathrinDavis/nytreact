import React from "react";
import API from "../utils/API";
import ASaves from "../ASaved";

class SaveBox extends React.Component {
    constructor(){
        super();
        this.state= {
            articles:[]
        };
    }

    componentDidMount() {
        // Get the saved articles
        API.getArticles().then(function(res) {
            var component = this;
            if (res !== this.state.articles) {

                var artUlo = response.map(function(a, i) {

                    return <div className="well" key={i}>
                        <h4 className="articleHeadline">
                            <span className="label label-success">{i + 1}</span>
                            {a.title}</h4>
                        <h5>{a.date}</h5>
                        <a href={a.url}>{a.url}</a>

                        <input type="hidden" name="articleId" value={a._id}/>
                        <br></br>
                        <button onClick={() => component.deleteArticleClick(a._id)} className="btn btn-default text-center btn-primary">Delete</button>
                    </div>;
                })

                this.setState({articles: artUlo});
            }
        }.bind(this));
    },

    deleteArticleClick(res) {
        API.deleteArticle(res)

        API.getArticles().then(function(res) {
            var component = this;
            if (res !== this.state.articles) {

                var artUlo = response.map(function(arts, i) {

                    return <div className="well" key={i}>
                        <h4 className="aHeadline">
                            <span className="label label-success">{i + 1}</span>
                            {a.title}</h4>
                        <h5>{a.date}</h5>
                        <a href={a.url}>{a.url}</a>

                        <input type="hidden" name="articleId" value={a._id}/>
                        <br></br>
                        <button onClick={() => component.deleteArticleClick(a._id)} className="btn btn-default text-center btn-primary">Delete</button>
                    </div>;
                })

                this.setState({articles: artUlo});
            }
        }.bind(this));

    },

    render: function() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Saved Articles</h3>
                            </div>
                            <div className="panel-body">
                                <Saved articles={this.state.articles} deleteArticle={this.deleteArticle}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

});

export default SaveBox;
