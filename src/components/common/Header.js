import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeNavLink = { color: "#229fa5" };
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid justify-content-start mx-5">
        <NavLink className="nav-link" activeStyle={activeNavLink} to="/" exact>
          HOME
        </NavLink>
        <NavLink
          className="nav-link"
          activeStyle={activeNavLink}
          to="/search"
          exact
        >
          SEARCH
        </NavLink>
        <NavLink
          className="nav-link"
          activeStyle={activeNavLink}
          to="/about"
          exact
        >
          ABOUT
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
