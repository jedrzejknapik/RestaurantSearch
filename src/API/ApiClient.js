import axios from "axios";

const apiUrl = "https://localhost:44360/";

export const getCuisines = () => {
  try {
    return axios.get(apiUrl + "Cuisine");
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurants = () => {
  try {
    return axios.get(apiUrl + "Restaurant");
  } catch (error) {
    console.log(error);
  }
};
