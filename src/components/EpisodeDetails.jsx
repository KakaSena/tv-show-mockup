import React from "react";
import styles from "../styles/EpisodeDetails.module.css";

const EpisodeDetails = ({ episode }) => {
  if (!episode) return null;

  return (
    <div className={styles.episodeDetails}>
      <h2>{episode.Title}</h2>
      <p>{episode.Synopsis}</p>
      <p>Duration: {episode.Duration} minutes</p>
    </div>
  );
};

export default EpisodeDetails;
