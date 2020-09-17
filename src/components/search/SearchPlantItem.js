import React, { Component } from "react";
import "../App.css";
import sadPlant from "../imgs/sadPlant.png";

class SearchPlantItem extends Component {
  render() {
    let imgUrl = sadPlant;
    let imgClass = "scale_image";
    if (this.props.data.image_url != null) {
      imgUrl = this.props.data.image_url;
      imgClass = "crop_image";
    }

    return (
      <div className="card h-100">
        <img
          className={`card-img-top ${imgClass}`}
          src={imgUrl}
          alt="plant image"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.scientific_name}</h5>
          <p className="card-text">
            {this.props.data.common_name != null && (
              <>
                Also called{" "}
                <span className="capitalizeLetters">
                  {this.props.data.common_name}.&nbsp;
                </span>
              </>
            )}
            {this.props.data.family != null && (
              <>
                Is a species of the{" "}
                <span className="capitalizeLetters">
                  {this.props.data.family}
                </span>{" "}
                family.
              </>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default SearchPlantItem;
