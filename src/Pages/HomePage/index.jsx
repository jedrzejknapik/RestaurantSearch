import Header from "../../Components/Header";
import Filter from "../../Components/Filter";
import Card from "../../Components/Card";
import { getCuisines } from "../../API/ApiClient";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";

function HomePage() {
  const { filteredRestaurants } = useContext(AppContext);

  return (
    <div className="app">
      <Header />
      <Filter />
      <div className="cards">
        {filteredRestaurants.map((restaurant) => (
          <Card restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
