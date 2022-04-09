import React, { useContext } from "react";
import "./Toggle.css";
import { ThemeContext } from "../../context";

function Toggle({ toggled, onClick }) {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="position">
      <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
        <div className="notch" onClick={handleClick}></div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </div>
  );
}

export default Toggle;
