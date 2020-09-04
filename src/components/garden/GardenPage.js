import React, { Component } from "react";
import "./GardenPage.css";
import PlantItem from "./PlantItem";
import * as trefleApi from "../../api/trefleApi";

class GardenPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantsInGardenIds: [
        678281,
        173327,
        190500,
        126957,
        167888,
        143075,
        189539,
        137834,
        124198,
      ],
      plantsInGarden: null,
      isFetching: true,
      error: null,
    };
  }

  componentDidMount() {
    console.log("Hello from componentDidMount");

    const fetchedPlantsInGarden = this.state.plantsInGardenIds.map((id) => {
      return trefleApi.getPlantById(id);
    });

    Promise.all(fetchedPlantsInGarden).then((results) => {
      this.setState({ plantsInGarden: results, isFetching: false });
    });
  }

  render() {
    let plantsToRender = [];
    if (!this.state.isFetching) {
      plantsToRender = this.state.plantsInGarden.map((p) => (
        <PlantItem
          key={p.data.main_species_id}
          id={p.data.main_species_id}
          image_url={p.data.image_url}
          error={p.error}
        />
      ));
    }

    return (
      <div className="GardenPage">
        <p>Hello from garden component</p>
        <div className="GardenPage-plant-items">
          {this.state.isFetching && <p>Fetching garden items...</p>}
          {plantsToRender}
        </div>
      </div>
    );
  }
}
export default GardenPage;
