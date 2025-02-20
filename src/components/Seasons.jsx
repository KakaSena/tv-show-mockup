import React from "react";
import styles from "../styles/Seasons.module.css";

const Seasons = ({ seasons, onSelectSeason }) => {
  return (
    <div className={styles.seasons}>
      {seasons.map((season) => (
        <button
          key={season}
          className={styles.seasonButton}
          onClick={() => onSelectSeason(season)}
        >
          {season}
        </button>
      ))}
    </div>
  );
};

export default Seasons;
