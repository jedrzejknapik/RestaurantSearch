import styles from "./Filter.module.scss";
import { useContext, useState } from "react";
import AppContext from "../../Context/AppContext";

function Filter() {
  const { cuisines, countries, handleFilter } = useContext(AppContext);

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [cuisine, setCuisine] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleClick = async () => {
    await handleFilter(cuisine, country, rating);
  };

  return (
    <div className={styles.filter}>
      <select
        type="select"
        className={styles.select}
        value={cuisine}
        onChange={handleCuisineChange}
      >
        <option value={""}>Kuchnia</option>
        {cuisines?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <select
        type="select"
        className={styles.select}
        onChange={handleRatingChange}
        value={rating}
      >
        <option value={""}>Minimalna ocena</option>
        {ratings.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>

      <select
        type="select"
        className={styles.select}
        onChange={handleCountryChange}
        value={country}
      >
        <option value={""}>Kraj pochodzenia</option>
        {countries?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <button className={styles.button} onClick={handleClick}>
        Filtruj
      </button>
    </div>
  );
}

export default Filter;
