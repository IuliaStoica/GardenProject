import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeNavLink = { color: "#229fa5" };
  return (
    <div className="container-fluid">
      <nav id="navBar" className="navbar justify-content-start fixed-top">
        <NavLink className="nav-link" activeStyle={activeNavLink} to="/" exact>
          HOME
        </NavLink>
        <NavLink
          className="nav-link"
          activeStyle={activeNavLink}
          to="/about"
          exact
        >
          ABOUT
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
