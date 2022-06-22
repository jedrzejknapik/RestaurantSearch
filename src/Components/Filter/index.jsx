import styles from "./Filter.module.scss";
import { useContext, useState } from "react";
import AppContext from "../../Context/AppContext";

function Filter() {
  const { cuisines, handleFilter } = useContext(AppContext);

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [cuisine, setCuisine] = useState(null);
  const [country, setCountry] = useState(null);
  const [rating, setRating] = useState(null);

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
    handleFilter(e.target.value, country, rating);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    handleFilter(cuisine, country, e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    handleFilter(cuisine, e.target.value, rating);
  };

  return (
    <div className={styles.filter}>
      <select
        type="select"
        className={styles.select}
        onChange={handleCuisineChange}
      >
        <option selected value={null}>
          Cuisine
        </option>
        {cuisines?.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
      <select
        type="select"
        className={styles.select}
        onChange={handleRatingChange}
      >
        <option selected value={null}>
          Minimal rating
        </option>
        {ratings.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>

      <select
        type="select"
        className={styles.select}
        onChange={handleCountryChange}
      >
        <option selected value={null}>
          Country
        </option>
        {cuisines?.map((item) => (
          <option value={item.countryOfOrigin}>{item.countryOfOrigin}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
