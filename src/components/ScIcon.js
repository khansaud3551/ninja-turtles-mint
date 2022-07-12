import React from "react";
import "../index.css";

function ScIcon({ iconSrc, link }) {
  return (
    <a href={link} target="_blank" className="social__icon">
      <div>
        <img src={iconSrc} alt="" />
      </div>
    </a>
  );
}

export default ScIcon;
