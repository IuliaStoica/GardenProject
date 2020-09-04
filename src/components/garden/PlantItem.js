import React, { Component } from "react";
import "./PlantItem.css";

class PlantItem extends Component {
  render() {
    return (
      <div className="PlantItem">
        {!this.props.error ? (
          <>
            <img src={this.props.image_url} />
            <p>Hello from plant item component {this.props.id}</p>
          </>
        ) : (
          <p>
            Plant item with id {this.props.id} could not be found. Please
            contact support.
          </p>
        )}
      </div>
    );
  }
}
export default PlantItem;
