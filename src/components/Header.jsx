import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({ title, genres, year }) => {
  const Genres =
    genres && genres.length > 0
      ? genres.map((genre) => genre.Title).join(", ")
      : "Genre not specified";

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <p>
          {Genres} | {year}
        </p>
      </div>
    </div>
  );
};

export default Header;
