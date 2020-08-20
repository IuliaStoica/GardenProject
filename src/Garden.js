import React, { Component } from "react";
import "./Garden.css";
import PlantItem from "./PlantItem";
const fetch = require('node-fetch');

const apiToken = 'Q7MaNoyuQYEtFH-qZWl3aUShTIeXyBGfkNhxiisWUZo';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

class Garden extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      plantsInGardenIds: [678281, 173327, 190500, 126957, 167888, 0, 143075, 189539, 137834, 124198],
      plantsInGarden: null,
      isFetching: true,
      error: null
    };
  }

  componentDidMount() {

    const fetchedPlantsInGarden = this.state.plantsInGardenIds.map(async p => {
        let apiUrl = `https://trefle.io/api/v1/plants/${p}?token=${apiToken}`;
        try {
          const response = await fetch(proxyUrl + apiUrl);
          const jsonData = await response.json();
          //console.log(response);
          //console.log(jsonData);
          if (!response.ok) {
            console.log("Response was not ok");
            throw new Error(response.statusText);
          } else {
            console.log("Response was ok");
            return {data: {...jsonData.data}, error: false};
          }
        } catch (error) {
          console.log("Catched an error");
          console.log(error);
          return { data: {main_species_id: p}, error: true};
        }
      });

    Promise.all(fetchedPlantsInGarden).then((results) => {  
      this.setState({ plantsInGarden: results, isFetching: false });
    });
  }

  render() {
    let plantsToRender = [];
    if (!this.state.isFetching) {
      plantsToRender = this.state.plantsInGarden.map(p => (
        <PlantItem key={p.data.main_species_id} id={p.data.main_species_id} error={p.error}/>
      ));
    }

    return (
      <div className='Garden'>
        <p>Hello from garden component</p>
        <div className='Garden-plant-items'>
          { this.state.isFetching && <p>Fetching garden items...</p> }
          { plantsToRender }
        </div>
      </div>
    );
  }
}
export default Garden;
