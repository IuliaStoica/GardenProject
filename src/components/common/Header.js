import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      scrolled: "",
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const height = document.getElementById("navBar").clientHeight;
    this.setState({ height: height });
  }

  componentWilllUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > this.state.height) {
      this.setState({ scrolled: "scrolled" });
    } else {
      this.setState({ scrolled: "" });
    }
  }

  render() {
    const activeNavLink = { color: "#229fa5" };
    return (
      <nav
        id="navBar"
        className={`navbar justify-content-start fixed-top ${this.state.scrolled}`}
      >
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
    );
  }
}

export default Header;
