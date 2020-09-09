import React, { Component } from "react";
import "./GardenPage.css";
import "../App.css";
import PlantItem from "./PlantItem";

class GardenPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantsInGardenIds: [
        678281,
        173327,
        1,
        190500,
        126957,
        167888,
        143075,
        189539,
        137834,
        124198,
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid margin_top">
        <p>Iulia's garden</p>
        <div className="row mx-5">
          {this.state.plantsInGardenIds.map((id) => (
            <div key={id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5">
              <PlantItem id={id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default GardenPage;
