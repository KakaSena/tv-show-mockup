import React, { useState } from "react";
import styles from "./Footer.module.css";
import { getFooterItems } from "../../config/footerConfig";
import { useFooter } from "../../hooks/useFooter";

const Footer = ({ cast, show }) => {
  const footerItems = getFooterItems(show, cast);
  const { activeItem, footerBarRef, footerItemsRef, handleItemClick } =
    useFooter(footerItems, "general");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        {footerItems.map((item, index) => (
          <span
            key={item.id}
            ref={(el) => (footerItemsRef.current[index] = el)}
            className={`${styles.footerItem} ${
              activeItem === item.id ? styles.active : ""
            }`}
            onClick={() => handleItemClick(item.id, index)}
          >
            {item.label}
          </span>
        ))}
        <div ref={footerBarRef} className={styles.footerBar} />
      </div>
      <div className={styles.footerContent}>
        {footerItems.find((item) => item.id === activeItem)?.component}
      </div>
    </footer>
  );
};

export default Footer;
