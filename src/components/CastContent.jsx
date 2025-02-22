import React from "react";
import styles from "../styles/CastConent.module.css";

const Cast = ({ cast, onClose }) => {
  return (
    <div className={styles.castOverlay}>
      <div className={styles.castCarousel}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Cast Members</h2>
        <div className={styles.castList}>
          {cast.map((member) => (
            <div key={member.ID} className={styles.castMember}>
              {member.Name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cast;
