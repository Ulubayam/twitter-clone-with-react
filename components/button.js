import React from "react";

import styles from "./button.module.css";
function button({ children }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}

export default button;
