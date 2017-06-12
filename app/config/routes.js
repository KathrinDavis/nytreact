import React from "react";

import { Route, IndexRoute, Router, browserHistory } from "react-router";


//var Route = router.Route;
//var Router = router.Router;

//var browserHistory = router.brouserHistory;
//var IndexRoute = router.IndexRoute;


import Main from "../components/Main";
//saved articles
import Saved from "../components/Saved";

import Search from "../components/Search"

import Home from "../components/Home";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path= "search" component={Search} />
    <Route path="saved" component={Saved} />
    <IndexRoute component={Search} />
    </Route>
  </Router>
);

export default routes;
