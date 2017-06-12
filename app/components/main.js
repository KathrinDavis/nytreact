
import React from "react";
var Link = require("react-router").Link
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ArticleForm from "./common/ArticleForm";
import Pannel from "./common/Pannel";


class Main extends React.Component {
	constructor(){
		super();
	}
}

props => (
  <div>
    
    <Navbar />

    <div className="jumbotron" style="background-color: #20315A ; color: white;">
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times React Search</strong></h1>
    </div>

    <div className="container">
    	<div className ="row">
    	<div className ="col-md-12">
    		{props.children}
    	</div>
    	</div>
    </div>
    
    <Footer/>
  
  </div>
);

export default Main;
