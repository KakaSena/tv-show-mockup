import React, { useState } from "react";
import styles from "../styles/Footer.module.css";
import General from "./General";
import Cast from "./Cast";

const Footer = ({ onCastClick }) => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showCast, setShowCast] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleGeneral = () => {
    if (showCast) {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => {
        setShowCast(false);
        setShowGeneral(true);
        setFadeOut(false); // Reset fade-out effect
      }, 300); // Match the duration of the CSS transition
    }
  };

  const toggleCast = () => {
    if (showGeneral) {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => {
        setShowGeneral(false);
        setShowCast(true);
        setFadeOut(false); // Reset fade-out effect
      }, 300); // Match the duration of the CSS transition
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

      {/* Elenco Button and Content */}
      <div className={styles.footerSection}>
        <button onClick={toggleCast} className={styles.footerButton}>
          ELENCO
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
