import React from "react";
import "./allCommission.css";
import SetCommission from "./SetCommission";

import Glo from "./pictures/glo.svg";
import Airtel from "./pictures/airtel.svg";
import Mobile from "./pictures/9mobile.svg";
import Mtn from "./pictures/mtn.svg";

function AirtimeCommission() {
  return (
    <>
      <div className="bodyCont">
        <SetCommission />
        <div className="p-5">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ width: "55%" }}
          >
            <div className="img-divs">
              <img src={Mtn} alt="" />
            </div>
            <div className="img-divs">
              <img src={Glo} alt="" />
            </div>
            <div className="img-divs">
              <img src={Airtel} alt="" />
            </div>
            <div className="img-divs">
              <img src={Mobile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AirtimeCommission;
