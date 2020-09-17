import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import GardenPage from "./garden/GardenPage";
import SearchPage from "./search/SearchPage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={GardenPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </>
    );
  }
}

export default App;
