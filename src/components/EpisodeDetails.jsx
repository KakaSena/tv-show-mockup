import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/EpisodeDetails.module.css";

const EpisodeDetails = ({ episode }) => {
  if (!episode) return null;

  return (
    <div className={styles.episodeDetails}>
      {episode.Image && (
        <img
          src={episode.Image}
          alt={episode.Title}
          className={styles.episodeImage}
        />
      )}
      <h2>{episode.Title}</h2>
      <p>{episode.Synopsis}</p>
      <p>Duration: {episode.Duration} minutes</p>
    </div>
  );
};

EpisodeDetails.defaultProps = {
  episode: {
    Title: "No Title Available",
    Synopsis: "No synopsis available.",
    Duration: "Duration not specified",
    Image: "",
  },
};

EpisodeDetails.propTypes = {
  episode: PropTypes.shape({
    Title: PropTypes.string,
    Synopsis: PropTypes.string,
    Duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Image: PropTypes.string,
  }),
};

export default EpisodeDetails;
