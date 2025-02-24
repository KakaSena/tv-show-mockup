import React, { useState } from "react";
import styles from "./Footer.module.css";
import General from "../General/General";
import Cast from "../Cast";

const Footer = ({ onCastClick }) => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showCast, setShowCast] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleGeneral = () => {
    if (showCast) {
      setFadeOut(true);
      setTimeout(() => {
        setShowCast(false);
        setShowGeneral(true);
        setFadeOut(false);
      }, 300);
    }
  };

  const toggleCast = () => {
    if (showGeneral) {
      setFadeOut(true);
      setTimeout(() => {
        setShowGeneral(false);
        setShowCast(true);
        setFadeOut(false);
      }, 300);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <button onClick={toggleGeneral} className={styles.footerButton}>
          GENERAL
        </button>
        {showGeneral && (
          <div className={`${styles.content} ${fadeOut ? styles.fadeOut : ""}`}>
            <General />
          </div>
        )}
      </div>

      <div className={styles.footerSection}>
        <button onClick={toggleCast} className={styles.footerButton}>
          CAST
        </button>
        {showCast && (
          <div className={`${styles.content} ${fadeOut ? styles.fadeOut : ""}`}>
            <Cast onCastClick={onCastClick} />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
