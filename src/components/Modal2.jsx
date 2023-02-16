import React from "react";

function Modal2({ children, emma }) {
  if (!emma) return null;
  return <div>{children}</div>;
}

export default Modal2;
