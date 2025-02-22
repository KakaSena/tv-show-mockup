import React from "react";
import styles from "../styles/Cast.module.css";

const Cast = ({ onCastClick }) => {
  return (
    <div className={styles.castContent}>
      <ul>
        <li onClick={onCastClick} style={{ cursor: "pointer" }}>
          Cast Members
        </li>
      </ul>
    </div>
  );
};

export default Cast;
