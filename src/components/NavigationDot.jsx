import styles from "../styles/Home.module.css";
import React, { useContext } from "react";
import { AppContext } from "../context";

function NavigationDot() {
  const { slideIndex, currentSlide, apiData } = useContext(AppContext);
  return (
    <div className={styles.dotcontainer}>
      {apiData.map((data, i) => {
        let active = "";
        if (i === slideIndex) {
          active = styles.active;
        }
        return (
          <span
            className={styles.dot + " " + active}
            onClick={() => currentSlide(i)}
            key={data.id + i}
          ></span>
        );
      })}
    </div>
  );
}
export default NavigationDot;
