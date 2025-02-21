import React from "react";
import PropTypes from "prop-types";
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

Episodes.defaultProps = {
  episodes: [
    {
      ID: "default-id",
      Title: "No Title Available",
      Synopsis: "No synopsis available.",
    },
  ],
  onSelectEpisode: () => {}, // Default to a no-op function if no handler is provided
};

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Synopsis: PropTypes.string,
    })
  ),
  onSelectEpisode: PropTypes.func,
};
export default Episodes;
