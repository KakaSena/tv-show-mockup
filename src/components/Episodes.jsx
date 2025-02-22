import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Episodes.module.css";
import EpisodeDetails from "./EpisodeDetails";

const Episodes = ({ episodes, onSelectEpisode }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleEpisodeClick = (episode) => {
    if (selectedEpisode?.ID === episode.ID) {
      setSelectedEpisode(null);
    } else {
      setSelectedEpisode(episode);
    }
    onSelectEpisode(episode);
  };
  return (
    <div className={styles.episodeList}>
      {episodes.map((episode) => (
        <div
          key={episode.ID}
          className={`${styles.episode} ${
            selectedEpisode?.ID === episode.ID ? styles.selected : ""
          }`}
          onClick={() => handleEpisodeClick(episode)}
        >
          <div className={styles.episodeContent}>
            <h3>
              {episode.EpisodeNumber} {episode.Title}{" "}
              <i className="bi bi-play-circle"></i>
            </h3>
          </div>

          {selectedEpisode?.ID === episode.ID && (
            <EpisodeDetails episode={selectedEpisode} />
          )}
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
