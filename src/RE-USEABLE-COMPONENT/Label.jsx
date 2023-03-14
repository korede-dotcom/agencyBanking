import React from "react";

function Label({ htmlFor, text, type }) {
  return (
    <>
      {type === "require" && (
        <label style={label} htmlFor={htmlFor}>
          {text}
          <span style={sup}>*</span>
        </label>
      )}

      {type === "normal" && (
        <label style={label} htmlFor={htmlFor}>
          {text}
        </label>
      )}
    </>
  );
}

export default Label;

const sup = {
  color: "red",
  paddingLeft: ".3rem",
  fontSize: "1rem",
};
const label = {
  color: "rgba(0,0,0,0.7)",
  fontSize: ".9rem",
  fontWeight: "645",
  paddingBottom: ".6rem",
};
