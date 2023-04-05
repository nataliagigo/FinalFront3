import React from "react";
import styles from '../Styles/ModeButton.module.css'

const ModeButton = ({ onClick }) => {
  return (
    <div className={styles.toggleDark}>
      <input
        type="checkbox"
        className={styles.box}
        id="checkbox"
        onClick={onClick}
      />
      <label htmlFor="checkbox" className={styles.label}>
        <span className={styles.dark}>Light</span>
        <span className={styles.light}>Dark</span>
        <div className={styles.square} />
      </label>
    </div>
  );
};

export default ModeButton;
