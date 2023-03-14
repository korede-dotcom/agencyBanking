import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { StyledPignation } from "../STYLED-COMPONENT/StyledModal";
import "./table.css";

function Footer({
  firstNumber,
  lastNumber,
  TotalNumber,
  PreBtn,
  onClickNext,
  pignation,
  setpignation,
}) {
  // const [disable, setDiable] = useState();
  // const page = () => {
  //   let pageNumber = Math.ciel(17 / 10);
  //   console.log(pageNumber);
  // };
  const previewHandler = () => {
    setpignation(pignation === 1 ? pignation : pignation - 1);
  };
  const nextHandler = () => {
    setpignation(pignation + 1);
  };

  // useEffect(() => {
  //   page();
  // });
  return (
    <>
      <div className="foot-footer bg-white">
        <p>
          Showing {firstNumber} to {lastNumber} of {TotalNumber} entries
        </p>
        <div className="sub-foot-footer">
          <StyledPignation pig="pig" onClick={previewHandler}>
            <div style={left}>
              <BsArrowLeft />{" "}
            </div>{" "}
            <span style={text}>Preview</span>{" "}
          </StyledPignation>
          <StyledPignation pig="pig">{pignation}</StyledPignation>
          <button className="next1" onClick={nextHandler}>
            <span style={text}>Next</span>
            <div style={right}>
              <BsArrowRight />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
const text = {
  display: "flex",
};
const left = {
  paddingRight: ".5rem",
  fontSize: "1rem",
  display: "flex",
};

const right = {
  paddingLeft: ".5rem",
  fontSize: "1rem",
  display: "flex",
};
