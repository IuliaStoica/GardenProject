import React, { Component } from "react";
import "./GardenPage.css";
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
        //126957,
        //167888,
        //143075,
        //189539,
        //137834,
        //124198,
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container margin_top">
        <p>Hello from garden component</p>
        <div className="GardenPage-plant-items">
          {this.state.plantsInGardenIds.map((id) => (
            <PlantItem id={id} key={id} />
          ))}
        </div>
      </div>
    );
  }
}
export default GardenPage;
