const fetch = require("node-fetch");
const apiToken = "Q7MaNoyuQYEtFH-qZWl3aUShTIeXyBGfkNhxiisWUZo";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export async function getPlantById(id) {
  let apiUrl = `https://trefle.io/api/v1/plants/${id}?token=${apiToken}`;
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const jsonData = await response.json();
    if (!response.ok) {
      console.log("Response was not ok");
      throw new Error(response.statusText);
    } else {
      console.log("Response was ok");
      return { data: { ...jsonData.data }, error: false };
    }
  } catch (error) {
    console.log("Catched an error");
    console.log(error);
    return { data: { main_species_id: id }, error: true };
  }
}
