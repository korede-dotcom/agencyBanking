import React, { useState } from "react";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

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
              <BsToggle2On />
            </div>
          </section>
        ) : (
          <section className="d-flex align-items-center">
            <div className="pe-2" style={{ transitionDelay: "1s" }}>
              Disable
            </div>
            <div style={style2}>
              <BsToggle2Off />
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default ToggleBtn;

const style1 = {
  color: "#6c96ff",
  fontSize: "1.8rem",
  display: "flex",
  background: "none",
  border: "none",
  transition: "linear 1s",
  cursor: "pointer",
};

const style2 = {
  color: "#c4c4c4",
  fontSize: "1.8rem",
  display: "flex",
  background: "none",
  border: "none",
  transition: "linear 1s",
  cursor: "pointer",
};
