import React from "react";
// import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import ToggleOff from "./pictures/toggleOff.svg";
import ToggleOn from "./pictures/toggleOn.svg";

function StatusToggle({ type }) {
  return (
    <>
      {type === "active" && (
        <button style={style1}>
          <img src={ToggleOn} alt="" style={img} />
        </button>
      )}

      {type === "in-active" && (
        <button style={style2}>
          <img src={ToggleOff} alt="" style={img} />
        </button>
      )}
    </>
  );
}

export default StatusToggle;

const img = {
  width: "100%",
};

const style1 = {
  alignItems: "start",
  width: "35px",
  display: "flex",
  background: "none",
  border: "none",
};

const style2 = {
  width: "35px",
  display: "flex",
  background: "none",
  border: "none",
  alignItems: "start",
};
