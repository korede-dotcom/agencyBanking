import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./table.css";

function Footer() {
  return (
    <>
      <div className="foot-footer bg-white">
        <p>Showing 1 to 5 of 100 entries</p>
        <div className="sub-foot-footer">
          <button className="previous1">
            <div>
              <BsArrowLeft />
            </div>
            <span>Previous</span>
          </button>
          <button className="footbtn2">1</button>
          <button className="footbtn2">2</button>
          <button className="footbtn2">3</button>
          <button className="footbtn2">4</button>
          <button className="footbtn2">...</button>
          <button className="footbtn2">10</button>
          <button className="next1">
            <span>Next</span>
            <div>
              <BsArrowRight />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
