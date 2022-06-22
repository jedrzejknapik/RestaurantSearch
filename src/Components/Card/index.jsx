import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { Rate } from "antd";

function Card({ restaurant }) {
  const avgScore =
    restaurant?.grades.reduce((acc, grade) => acc + grade.score, 0) /
    restaurant?.grades.length;

  return (
    <div className={styles.restaurantCard}>
      <img
        className={styles.image}
        src={require(`../../Assets/Images/${restaurant?.restaurantId}.jpg`)}
      />
      <div className={styles.shader}></div>
      <div className={styles.textContent}>
        <p className={styles.title}>{restaurant?.name}</p>
        <p className={styles.description}>
          {restaurant?.cuisines?.map((cuisine) => (
            <span className={styles.cuisine}>Kuchnia {cuisine.name}</span>
          ))}
        </p>
        <div className={styles.rating}>
          <Rate disabled value={avgScore} count={10} />
        </div>
        <NavLink
          to={`restaurant/${restaurant?.restaurantId}`}
          className={styles.link}
        >
          Explore details
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
