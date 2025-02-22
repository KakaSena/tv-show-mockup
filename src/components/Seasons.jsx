import React from "react";
import styles from "../styles/Seasons.module.css";

const Seasons = ({ seasons, selectedSeason, onSelectSeason }) => {
  return (
    <div className={styles.seasonsSlider}>
      {seasons.map((season) => (
        <button
          key={season}
          className={`${styles.seasonButton} ${
            selectedSeason === season ? styles.active : ""
          }`}
          onClick={() => onSelectSeason(season)}
        >
          {season.replace("T", "Season ")}
        </button>
      ))}
    </div>
  );
};

export default Seasons;
