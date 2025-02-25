import React from "react";
import PropTypes from "prop-types";
import styles from "./EpisodeDetails.module.css";

const EpisodeDetails = ({ episode }) => {
  if (!episode) return null;

  return (
    <div className={styles.episodeDetails}>
      {episode.Image && <img src={episode.Image} alt={episode.Title} />}
      <h2>{episode?.Title || "Título não disponível"}</h2>
      <p>{episode?.Synopsis || "Nenhuma sinopse disponível."}</p>
      <p>
        Duration:{" "}
        {episode?.Duration
          ? `${episode.Duration} minutes`
          : "Duração não especificada."}
      </p>
    </div>
  );
};

EpisodeDetails.defaultProps = {
  episode: {
    Title: "",
    Synopsis: "",
    Duration: "",
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
