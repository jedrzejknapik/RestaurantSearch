import { createContext, useState, useEffect } from "react";
import {
  getCuisines,
  getRestaurants,
  getFilteredRestaurants,
} from "../API/ApiClient";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cuisines, setCuisines] = useState([]);
  const [countries, setCountries] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteresRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getApplicationData = async () => {
      const cuisines = await getCuisines();

      const cuisineNames = cuisines?.data.map((c) => c.name);
      const countriesNames = cuisines.data.map((c) => c.countryOfOrigin);
      setCountries([...new Set(countriesNames)]);
      setCuisines([...new Set(cuisineNames)]);

      const restaurants = await getRestaurants();
      setRestaurants(restaurants.data);
      setFilteresRestaurants([...restaurants.data]);
    };

    getApplicationData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setFilteresRestaurants([...restaurants]);

    const filteredRestaurants = restaurants.filter((r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteresRestaurants(filteredRestaurants);
  };

  const handleFilter = async (cuisine, country, rating) => {
    let uri = `?CouisineName=${cuisine}&MinimalRating=${
      rating == "" ? 0 : rating
    }&Country=${country}`;

    let restaurants = { data: [] };
    restaurants = await getFilteredRestaurants(uri);

    setRestaurants([...restaurants.data]);
    setFilteresRestaurants([...restaurants.data]);
  };

  return (
    <AppContext.Provider
      value={{
        cuisines,
        countries,
        filteredRestaurants,
        handleSearch,
        handleFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
