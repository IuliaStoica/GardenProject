import "./App.css";
import kittyImg from "./assets/kittyImg.png";
import cruiseShip from "./assets/cruise-ship-silhouette.svg";

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return <div>
        Hello React!
        <img src={cruiseShip} alt="cruiseShip" />
        <img src={kittyImg} alt="kitty" />
    </div>;
};

ReactDOM.render(<App />, document.getElementById("root"));