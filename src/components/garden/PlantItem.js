import React, { Component } from "react";
import "./PlantItem.css";
import Spinner from "../common/Spinner";
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
    trefleApi
      .getPlantById(this.props.id)
      .then((fetchedPlant) =>
        this.setState({ plant: fetchedPlant, isFetching: false })
      );
  }

  render() {
    let plantToRender = <Spinner />;
    if (!this.state.isFetching) {
      plantToRender = !this.state.plant.error ? (
        <div className="card">
          <img className="card-img-top" src={this.state.plant.data.image_url} />
          <p>
            Hello from plant item component{" "}
            {this.state.plant.data.main_species_id}
          </p>
        </div>
      ) : (
        <div className="card">
          <p>
            Plant item with id {this.state.plant.data.main_species_id} could not
            be found. Please contact support.
          </p>
        </div>
      );
    }

    return <>{plantToRender}</>;
  }
}

export default PlantItem;
