import React, { useState } from "react";
import styles from "./Cast.module.css";

const Cast = ({ cast }) => {
  return (
    <div className={styles.castContainer}>
      <div className={styles.castList}>
        {cast.map((member) => (
          <div key={member.ID} className={styles.castCard}>
            {member.Name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
