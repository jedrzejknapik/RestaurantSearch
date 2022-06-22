import styles from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import AppContext from "../../Context/AppContext";

function Header() {
  const { handleSearch } = useContext(AppContext);

  const handleInput = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Search with good taste</h1>
      <div className={styles.searchWrapper}>
        <div className={styles.darkBackground}></div>
        <input
          type="text"
          className={styles.searchInput}
          onInput={handleInput}
        />
        <button className={styles.searchButton}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;
