import React, { useState } from "react";
import styles from "./Footer.module.css";
//import General from "../General/General";
//import Cast from "../Cast/Cast";
import { getFooterItems } from "../../config/footerConfig";
import { useFooter } from "../../hooks/useFooter";

// const Footer = ({ cast, show }) => {
//   const [showGeneral, setShowGeneral] = useState(true);
//   const [showCast, setShowCast] = useState(false);
//   const [fadeOut, setFadeOut] = useState(false);

//   const toggleGeneral = () => {
//     if (showCast) {
//       setFadeOut(true);
//       setTimeout(() => {
//         setShowCast(false);
//         setShowGeneral(true);
//         setFadeOut(false);
//       }, 300);
//     }
//   };

//   const toggleCast = () => {
//     if (showGeneral) {
//       setFadeOut(true);
//       setTimeout(() => {
//         setShowGeneral(false);
//         setShowCast(true);
//         setFadeOut(false);
//       }, 300);
//     }
//   };

//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footerSection}>
//         <button onClick={toggleGeneral} className={styles.GeneralButton}>
//           GERAL
//         </button>

//         {showGeneral && (
//           <div className={`${styles.content} ${fadeOut ? styles.fadeOut : ""}`}>
//             <General show={show} />
//           </div>
//         )}
//       </div>

//       <div className={styles.footerSection}>
//         <button onClick={toggleCast} className={styles.footerButton}>
//           ELENCO
//         </button>
//         {showCast && (
//           <div className={`${styles.content} ${fadeOut ? styles.fadeOut : ""}`}>
//             <Cast cast={cast} />
//           </div>
//         )}
//       </div>

//       <div className={styles.footerSection}>
//         <button className={styles.footerButton}>PRINCIPAIS PREMIOS</button>
//         {showGeneral && (
//           <div
//             className={`${styles.content} ${fadeOut ? styles.fadeOut : ""}`}
//           ></div>
//         )}
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = ({ cast, show }) => {
  // Get the footer items dynamically
  const footerItems = getFooterItems(show, cast);

  // Use the custom hook to manage footer state and behavior
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

export default Footer; // Default export
