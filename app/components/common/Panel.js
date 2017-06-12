import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {
  // favoriteArticle toggles a article's favorite status in the db and then
  // reloads all articles in our app
  favoriteArticle(article) {
    API.favoriteArticle(article).then(this.props.getArticles);
  }
   // deleteArticle deletes a article in the db and then
  // reloads all articles in our app
  deleteArticle(id) {
    API.deleteArticle(id).then(this.props.getArticles);
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              onClick={() => this.favoriteArticle(this.props.article)}
              style={styles.favoriteStyle}
              className={this.props.article.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteArticle(this.props.article._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {this.props.article.text}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;
