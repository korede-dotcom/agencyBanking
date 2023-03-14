import React, { useState } from "react";
// import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import ToggleOff from "./pictures/toggleOff.svg";
import ToggleOn from "./pictures/toggleOn.svg";

function ToggleBtn() {
  const [active, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <>
      <div onClick={handleToggle}>
        {active ? (
          <section className="d-flex align-items-center">
            <div className="pe-2" style={{ transitionDelay: "1s" }}>
              Active
            </div>
            <div style={style1}>
              <img src={ToggleOn} alt="" width="100%" />
            </div>
          </section>
        ) : (
          <section className="d-flex align-items-center">
            <div className="pe-2" style={{ transitionDelay: "1s" }}>
              Disable
            </div>
            <div style={style2}>
              <img src={ToggleOff} alt="" width="100%" />
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default ToggleBtn;

const style1 = {
  color: "#1b59f8",
  width: "35px",
  display: "flex",
  background: "none",
  border: "none",
  transition: "linear 1s",
  cursor: "pointer",
};

const style2 = {
  color: "#c4c4c4",
  width: "35px",
  display: "flex",
  background: "none",
  border: "none",
  transition: "linear 1s",
  cursor: "pointer",
};
