import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import GardenPage from "./garden/GardenPage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={GardenPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
