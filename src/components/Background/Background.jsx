import React from "react";
import PropTypes from "prop-types";
import styles from "./Background.module.css";

const Background = ({ title, genres, year, image }) => {
  const Genres = genres.map((genre) => genre.Title).join(", ");

  const backgroundImg = {
    backgroundImage: image ? `url(${image})` : "none",
  };

  return (
    <div className={styles.header} style={backgroundImg}>
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <p>
          {Genres} | {year}
        </p>
      </div>
    </div>
  );
};

Background.defaultProps = {
  title: "No Title Available",
  genres: [],
  year: "Year not specified",
  image: "",
};

Background.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.string,
      Title: PropTypes.string,
    })
  ),
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
};

export default Background;
