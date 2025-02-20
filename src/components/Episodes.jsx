import React from "react";
import styles from "../styles/Episodes.module.css";

const Episodes = ({ episodes, onSelectEpisode }) => {
  return (
    <div className={styles.episodeList}>
      {episodes.map((episode) => (
        <div
          key={episode.ID}
          className={styles.episode}
          onClick={() => onSelectEpisode(episode)}
        >
          <h3>{episode.Title}</h3>
          <p>{episode.Synopsis}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
