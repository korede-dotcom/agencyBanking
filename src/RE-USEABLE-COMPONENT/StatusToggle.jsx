import React from "react";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

function StatusToggle({ type }) {
  return (
    <>
      {type === "active" && (
        <button style={style1}>
          <BsToggle2On />
        </button>
      )}

      {type === "in-active" && (
        <button style={style2}>
          <BsToggle2Off />
        </button>
      )}
    </>
  );
}

export default StatusToggle;

const style1 = {
  color: "#6c96ff",
  fontSize: "1.8rem",
  display: "flex",
  background: "none",
  border: "none",
};

const style2 = {
  color: "#c4c4c4",
  fontSize: "1.8rem",
  display: "flex",
  background: "none",
  border: "none",
};
