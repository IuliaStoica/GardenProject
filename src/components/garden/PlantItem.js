import React, { Component } from "react";
import "./PlantItem.css";
import Spinner from "../common/Spinner";
import sadPlant from "../imgs/sadPlant.png";
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
    let fetchOk = !this.state.isFetching && !this.state.plant.error;
    let fetchNotOk = !this.state.isFetching && this.state.plant.error;

    return (
      <div className="card h-100">
        {this.state.isFetching && <Spinner />}
        {fetchOk && (
          <>
            <img
              className="card-img-top crop_image"
              src={this.state.plant.data.image_url}
              alt="plant image"
            />
            <div className="card-body">
              <h5 className="card-title">
                {this.state.plant.data.common_name}
              </h5>

              <button className="btn btn-outline-success btn-sm mx-1">
                Edit
              </button>
              <button className="btn btn-outline-danger btn-sm mx-1">
                Delete
              </button>
            </div>
          </>
        )}
        {fetchNotOk && (
          <>
            <img
              className="card-img-top scale_image"
              src={sadPlant}
              alt="plant image"
            />
            <div className="card-body">
              <p>
                Plant item with id {this.state.plant.data.main_species_id} could
                not be found. Please contact support.
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default PlantItem;
