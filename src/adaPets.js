// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';


const listPets = () => {
  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      console.log(error);
      setError(`API error:${error.response}`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
    
  }

  // Fill out as part of Wave 2.
  axios.get(BASE_URL)
  .then((response) => {
    // if (selectedPetId > response.data.length - 1 || selectedPetId < 0) {
    //   console.log("Invalid pet id");
    // } else {}
    setResult(response.data[selectedPetId - 1]);
    
  })
  .catch((error) => {
    console.log(error);
    setError(`API error:${error.response}`);
  });
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  }

  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
