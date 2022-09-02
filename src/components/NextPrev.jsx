import styles from "../styles/Home.module.css";
import React, { useContext } from "react";
import { AppContext } from "../context";

function NextPrev() {
  const { plusSlides } = useContext(AppContext);
  return (
    <>
      <span className={styles.prev} onClick={() => plusSlides(-1)}>
        &#10094;
      </span>
      <span className={styles.next} onClick={() => plusSlides(1)}>
        &#10095;
      </span>
    </>
  );
}
export default NextPrev;
