import React, { Component } from "react";
import "./PlantItem.css";
import * as trefleApi from "../../api/trefleApi";

class PlantItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plant: null,
      isFetching: true,
    };
  }

  componentDidMount() {
    console.log("Hello from componentDidMount");

    trefleApi
      .getPlantById(this.props.id)
      .then((fetchedPlant) =>
        this.setState({ plant: fetchedPlant, isFetching: false })
      );
  }

  render() {
    let plantToRender = <p>Loading...</p>;
    if (!this.state.isFetching) {
      plantToRender = !this.state.plant.error ? (
        <>
          <img src={this.state.plant.data.image_url} />
          <p>
            Hello from plant item component{" "}
            {this.state.plant.data.main_species_id}
          </p>
        </>
      ) : (
        <p>
          Plant item with id {this.state.plant.data.main_species_id} could not
          be found. Please contact support.
        </p>
      );
    }

    return <div className="PlantItem">{plantToRender}</div>;
  }
}

export default PlantItem;
