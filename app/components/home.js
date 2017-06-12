import React, { Component } from "react";
import Panel from "./common/Panel";
import ArticleForm from "./common/ArticleForm";
import API from "../utils/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding getarticles to our component since we'll be passing this
    // method to child components
    this.getArticles = this.getArticles.bind(this);
  }
  // Getting all articles when the component mounts
  componentDidMount() {
    this.getArticles();
  }
  getArticles() {
    API.getArticles().then((res) => {
      this.setState({ articles: res.data });
    });
  }
  // A helper method for rendering one panel for each article
  renderArticles() {
    return this.state.articles.map(article => (
      <Panel
        article={article}
        key={article._id}
        getArticles={this.getArticles}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArticleForm
            getArticles={this.getArticles}
          />
        </div>
        <div className="row">
          <hr />
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default Home;
