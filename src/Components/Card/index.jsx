import styles from "./Card.module.scss";
import cardImage from "../../Assets/Images/cardContent.jpg";
import { NavLink } from "react-router-dom";

function Card({ restaurant }) {
  return (
    <div className={styles.restaurantCard}>
      <img className={styles.image} src={cardImage} />
      <div className={styles.shader}></div>
      <div className={styles.textContent}>
        <p className={styles.title}>{restaurant?.name}</p>
        <p className={styles.description}>
          {restaurant?.cuisines?.map((cuisine) => (
            <span className={styles.cuisine}>Kuchnia {cuisine.name}</span>
          ))}
        </p>
        <NavLink to="#" className={styles.link}>
          Explore details
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
