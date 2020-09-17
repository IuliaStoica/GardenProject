import React, { Component } from "react";
import "./PlantItem.css";
import "../App.css";
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
                <span className="capitalizeLetters">
                  {this.state.plant.data.scientific_name}
                </span>
              </h5>
              <p className="card-text">
                {this.state.plant.data.common_name != null && (
                  <>
                    Also called{" "}
                    <span className="capitalizeLetters">
                      {this.state.plant.data.common_name}.&nbsp;
                    </span>
                  </>
                )}
                {this.state.plant.data.family.name != null && (
                  <>
                    Is a species of the{" "}
                    <span className="capitalizeLetters">
                      {this.state.plant.data.family.name}
                    </span>{" "}
                    family.
                  </>
                )}
              </p>
            </div>
            <div className="card_buttons d-flex justify-content-start">
              <button className="btn btn-outline-success btn-sm mr-2">
                Edit
              </button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
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
              <p className="card-text">
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
