import React from "react";
import "./ButtonLoader.css";

function ButtonLoader({ text }) {
  return (
    <>
      <div className="mother-div">
        <div className="spinner"></div>
        <div className="text">{text}</div>
      </div>
    </>
  );
}

export default ButtonLoader;
