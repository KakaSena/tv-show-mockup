import React from "react";
import styles from "../styles/General.module.css";

const Icon1 = () => <span>📞</span>; // Example: Phone icon
const Icon2 = () => <span>📧</span>; // Example: Email icon
const Icon3 = () => <span>🔒</span>; // Example: Lock icon

const General = () => {
  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked`); // Placeholder for icon click functionality
  };

  return (
    <div className={styles.generalContent}>
      <div className={styles.buttonContainer}>
        {/* Button 1 */}
        <div className={styles.button}>
          <span>About Us</span>
          <div
            className={styles.icon}
            onClick={() => handleIconClick("About Us")}
          >
            <Icon1 />
          </div>
        </div>

        {/* Button 2 */}
        <div className={styles.button}>
          <span>Contact</span>
          <div
            className={styles.icon}
            onClick={() => handleIconClick("Contact")}
          >
            <Icon2 />
          </div>
        </div>

        {/* Button 3 */}
        <div className={styles.button}>
          <span>Privacy Policy</span>
          <div
            className={styles.icon}
            onClick={() => handleIconClick("Privacy Policy")}
          >
            <Icon3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
