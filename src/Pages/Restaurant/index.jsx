import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRestaurantById } from "../../API/ApiClient";
import styles from "./Restaurant.module.scss";
import { Rate } from "antd";
import { FaMapMarkerAlt, FaRegStar, FaUtensils } from "react-icons/fa";

const Restaurant = () => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avg, setAvg] = useState(0);

  const { id } = useParams();
  useEffect(() => {
    const getRestaurant = async () => {
      const result = await getRestaurantById(id);
      setRes(result.data);

      const avgScore =
        result.data?.grades.reduce((acc, grade) => acc + grade.score, 0) /
        result.data?.grades.length;

      setAvg(avgScore);

      setLoading(false);
    };
    getRestaurant();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Ładowanie...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img
          className={styles.image}
          src={require(`../../Assets/Images/${res?.restaurantId}.jpg`)}
        />
        <div className={styles.title}>
          <div className={styles.name}>{res?.name}</div>
          <div className={styles.rating}>
            <Rate disabled value={avg} count={10} />
          </div>
          <div>{avg} / 10</div>
        </div>
      </div>
      <div className={styles.content}>
        <p>Informacje</p>
        <div className={styles.infoBar}>
          <div className={styles.infoIcon}>
            <FaMapMarkerAlt />
          </div>
          <div className={styles.infoContent}>
            {res?.district}, ul. {res?.address?.street} {res.address?.building}
          </div>
        </div>

        <div className={styles.infoBar}>
          <div className={styles.infoIcon}>
            <FaUtensils />
          </div>
          <div className={styles.infoContent}>
            Kuchnia {res.cuisines[0].name}
          </div>
        </div>
        <p>Oceny</p>
        {res?.grades.map((g, index) => (
          <div key={index} className={styles.infoBar}>
            <div className={styles.infoIcon}>
              <FaRegStar />
            </div>
            <div className={styles.ratingContent}>
              <span>{g?.score} / 10</span>
              <span>{g?.client?.nickName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
