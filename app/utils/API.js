import axios from "axios";

var authKey= !!!NEED API AUTH KEY!!!


const API = {
  runSearch(searchTerm){
    console.log(searchTerm);

    var apiBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
    var apiURL = apiBase+ "&q" + searchTerm;
    return axios.get(apiURL).then(function(res){
      return res.data.res.docs;
    });
  }

  // Retrieves all articles from the db
  getArticles() {
    return axios.get("/api/saved").then(function(response){
      return response.data
    })
  }
  // Saves a new article to the db
  postArticle(artObj) {
    return axios.post("/api", { title: artObj.headline.main, url: artObj.web_url, date: artObj.date });
  }
  // Deletes a article from the db
  deleteArticle(id) {
    return axios.delete("/api/saved/" + id);
  }

};

export default API;
