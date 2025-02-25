import React from "react";
import styles from "./General.module.css";
import PropTypes from "prop-types";

const General = ({ show }) => {
  const iconItems = [
    { icon: "╋", label: "Minha Lista" },
    { icon: "📈", label: "Avaliar" },
    { icon: "🔴", label: "Gravar" },
    { icon: "🔒", label: "Compartilhar" },
  ];
  return (
    <div className={styles.generalContent}>
      <div className={styles.iconContainer}>
        {iconItems.map((item, index) => (
          <div key={index} className={styles.iconItem}>
            <div className={styles.icon} aria-label={item.label}>
              <span>{item.icon}</span>
            </div>
            <span>{item.label}</span>
          </div>
        ))}
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

General.propTypes = {
  show: PropTypes.shape({
    Synopsis: PropTypes.string,
  }),
};

export default General;
