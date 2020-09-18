import React, { Component } from "react";
import Form from "../common/SearchForm";
import * as trefleApi from "../../api/trefleApi";
import "../App.css";
import "./SearchPage.css";
import SearchPlantItem from "./SearchPlantItem";
import Spinner from "../common/Spinner";

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantsSearchResult: [],
      isFetching: false,
      nbrFetched: -1,
      error: false,
    };
    this.submitSearchPlant = this.submitSearchPlant.bind(this);
  }

  submitSearchPlant(searchWord) {
    this.setState({ isFetching: true, nbrFetched: -1, error: false });
    trefleApi.getPlantsBySearchWord(searchWord).then((fetchedPlants) =>
      this.setState({
        plantsSearchResult: fetchedPlants.data,
        isFetching: false,
        nbrFetched: fetchedPlants.data.length,
        error: fetchedPlants.error,
      })
    );
  }

  render() {
    let searchResults;
    if (this.state.nbrFetched > 0) {
      searchResults = this.state.plantsSearchResult.map((item) => (
        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-5">
          <SearchPlantItem data={item} />
        </div>
      ));
    }

    return (
      <>
        <div className="container-fluid margin_top">
          <div id="searchArea" className="row mx-5">
            <div className="col d-flex justify-content-center align-items-center">
              <Form
                placeholder="Enter text to search for a plant"
                submitAction={this.submitSearchPlant}
              />
            </div>
          </div>
          <div className="row mx-5 mb-4">
            <div className="col">
              <div className="horizontal_line"></div>
            </div>
          </div>
          {this.state.isFetching && <Spinner />}
          {this.state.error && (
            <div className="row mx-5 padding_left_right">
              There was an error. Results could not be fetched.
            </div>
          )}
          {this.state.nbrFetched == 0 && (
            <div className="row mx-5 padding_left_right">No results found.</div>
          )}
          <div className="row mx-5">{searchResults}</div>
        </div>
      </>
    );
  }
}
export default SearchPage;
