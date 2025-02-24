import React from "react";
import styles from "./General.module.css";

const Icon1 = () => <span>╋</span>;
const Icon2 = () => <span>🔴</span>;
const Icon3 = () => <span>🔒</span>;

const General = () => {
  return (
    <div className={styles.generalContent}>
      <div className={styles.buttonContainer}>
        <span>Minha Lista</span>
        <div className={styles.icon}>
          <Icon1 />
        </div>

        <span>Gravar</span>
        <div className={styles.icon}>
          <Icon2 />
        </div>

        <span>Compartilhar</span>
        <div className={styles.icon}>
          <Icon3 />
        </div>
      </div>
    </div>
  );
};

export default General;
