import React from "react";

import { Route, IndexRoute, Router, browserHistory } from "react-router";


//var Route = router.Route;
//var Router = router.Router;

//var browserHistory = router.brouserHistory;
//var IndexRoute = router.IndexRoute;


import Main from "../components/Main";
//saved articles
import ASaved from "../components/ASaved";

import ASearch from "../components/ASearch";

import Home from "../components/Home";


export default = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

    <Route path= "search" component={ASearch} />
    <Route path="saved" component={ASaved} />
    <IndexRoute component={ASearch} />

    </Route>
  </Router>
);

