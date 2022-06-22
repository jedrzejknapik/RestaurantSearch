import { createContext, useState, useEffect } from "react";
import { getCuisines, getRestaurants } from "../API/ApiClient";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cuisines, setCuisines] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteresRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getApplicationData = async () => {
      const cuisines = await getCuisines();
      setCuisines(cuisines.data);

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

  const handleFilter = (cuisine, rating, country) => {
    //handleSearch(searchTerm);
    // const filteredItems = [];
    // for (const restaurant of filteredRestaurants) {
    //   if (cuisine != null) {
    //     if (restaurant.cuisines.filter((c) => c.id === cuisine).length > 0) {
    //       filteredItems.push(restaurant);
    //     }
    //   }
    //   if (rating != null) {
    //     if (restaurant.ra.filter((c) => c.id === cuisine).length > 0) {
    //       filteredItems.push(restaurant);
    //     }
    //   }
    // }
    // setFilteresRestaurants(filteredItems);
  };

  return (
    <AppContext.Provider
      value={{
        cuisines,
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
