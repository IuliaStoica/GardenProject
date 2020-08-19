import React, { Component } from "react";
import PlantItem from "./PlantItem";
const fetch = require('node-fetch');

const apiToken = 'Q7MaNoyuQYEtFH-qZWl3aUShTIeXyBGfkNhxiisWUZo';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl   = `https://trefle.io/api/v1/plants?token=${apiToken}`;

class Garden extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      plantsInGarden: null,
      isFetching: true,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
 
    (async () => {
        try {
          const response = await fetch(proxyUrl + apiUrl);
          const jsonData = await response.json();
          console.log(response);
          console.log(jsonData);
          if (!response.ok) {
            console.log("Response was not ok");
            throw new Error(response.statusText);
          } else {
            this.setState({ plantsInGarden: jsonData, isFetching: false });
          }
        } catch (error) {
          this.setState({ error: 'Something went wrong', isFetching: false });
          console.log("Catched an error");
          console.log(error);
        }
    })();
  }

  render() {
    return (
      <div>
        <p>Hello from garden component</p>
        { this.state.isFetching && <div>Fetching garden items...</div> }
        { !this.state.isFetching && 
          <div>
            {this.state.plantsInGarden.data.map((p) => (<PlantItem id={p.id} />))}
          </div> 
        }
      </div>
    );
  }
}
export default Garden;
