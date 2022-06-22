import axios from "axios";

const apiUrl = "https://localhost:44360/";

export const getCuisines = () => {
  try {
    return axios.get(apiUrl + "Cuisine");
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurantById = (id) => {
  try {
    return axios.get(apiUrl + `Restaurant/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurants = () => {
  try {
    return axios.get(apiUrl + "Restaurant/all");
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredRestaurants = (uri) => {
  try {
    return axios.get(apiUrl + "Restaurant" + uri);
  } catch (error) {
    console.log(error);
  }
};
