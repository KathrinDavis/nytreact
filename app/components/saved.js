import React, { Component } from "react";
import Panel from "./common/Panel";
import API from "../utils/API";

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding getArticles to this component since we'll be passing this method to 
    // other components to use
    this.getArticles = this.getArticle.bind(this);
  }
  // Getting all Articles once the component has mounted
  componentDidMount() {
    this.getArticles();
  }
  getArticles() {
    API.getArticles().then((res) => {
      const SavedArticles = res.data.filter(article => article.Saved);
      this.setState({ articles: savedArticles });
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
      <div>
        <div className="jumbotron text-center">
          <h1>Your Saved Articles</h1>
          <p>Your very best articles.</p>
        </div>
        <div className="container">
        <div className="row">
          {this.renderArticles()}
        </div>
        </div>
      </div>
    );
  }
}

export default Saved;
