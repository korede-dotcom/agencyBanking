import React from "react";

function TableSuccess({ type, text, className }) {
  return (
    <>
      {type === "active" && <button style={style1}>{text}</button>}
      {type === "in-active" && (
        <button className={className} style={style2}>
          {text}
        </button>
      )}
    </>
  );
}

export default TableSuccess;

const style1 = {
  color: "#0e880e",
  textAlign: "center",
  fontWeight: "600",
  background: "#e6fee6",
  border: "none",
  borderRadius: "3px",
  padding: "0 .8rem",
  width: "fit-content",
};

const style2 = {
  color: "#ff5b64",
  textAlign: "center",
  background: "#ffeced",
  border: "none",
  fontWeight: "600",
  width: "fit-content",
  borderRadius: "3px",
};
