import React from "react";
import "./DarkModeButton.css";

const DarkModeButton = ({ onClick }) => {
  return (
    <div className="toggleDark">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={onClick}
      />
      <label htmlFor="checkbox" className="label">
        <span className="moon">Light</span>
        <span className="sun">Dark</span>
        <div className="ball" />
      </label>
    </div>
  );
};

export default DarkModeButton;
