import React, { Component } from "react";

class PlantItem extends Component {
  render() {
    return (
      <div>
        <p>Hello from plant item component {this.props.id}</p>
      </div>
    );
  }
}
export default PlantItem;
