import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">New York Times React App</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/Search" && "active"}>
          <Link to="/ASearch">Search</Link>
        </li>
        <li className={location.pathname === "/Saved" && "active"}>
          <Link to="/ASaved">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;