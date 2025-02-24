import React from "react";
import styles from "./General.module.css";

const General = ({ show }) => {
  return (
    <div className={styles.generalContent}>
      <div className={styles.iconContainer}>
        <div className={styles.iconItem}>
          <div className={styles.icon}>
            <span>╋</span>
          </div>
          <span>Minha Lista</span>
        </div>

        <div className={styles.iconItem}>
          <div className={styles.icon}>
            <span>📈</span>
          </div>
          <span>Avaliar</span>
        </div>

        <div className={styles.iconItem}>
          <div className={styles.icon}>
            <span>🔴</span>
          </div>
          <span>Gravar</span>
        </div>

        <div className={styles.iconItem}>
          <div className={styles.icon}>
            <span>🔒</span>
          </div>
          <span>Compartilhar</span>
        </div>
      </div>

      {show?.Synopsis && (
        <div className={styles.synopsis}>
          <h3>Sinopse</h3>
          <p>{show.Synopsis}</p>
        </div>
      )}
    </div>
  );
};

export default General;
