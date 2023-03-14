import React from "react";
import "./allCommission.css";
import { Link } from "react-router-dom";

import SetCommission from "./SetCommission";
import ie from "./ElectPictures/ie.svg";
import eko from "./ElectPictures/eko.svg";
import enugu from "./ElectPictures/enugu.svg";
import yedc from "./ElectPictures/yedc.svg";
import abuja from "./ElectPictures/abuja.svg";
import kano from "./ElectPictures/Kano.svg";
import jos from "./ElectPictures/Jos.svg";
import kaduna from "./ElectPictures/Kaduna.svg";
import ib from "./ElectPictures/ib.svg";
import benin from "./ElectPictures/benin.svg";
import port from "./ElectPictures/port.svg";

function ElectricityCommission() {
  const data = [
    { url: "#", img: { img: ie }, id: 1 },
    { url: "#", img: { img: eko }, id: 2 },
    { url: "#", img: { img: enugu }, id: 3 },
    { url: "#", img: { img: yedc }, id: 4 },
    { url: "#", img: { img: abuja }, id: 5 },
    { url: "#", img: { img: kano }, id: 6 },
    { url: "#", img: { img: jos }, id: 7 },
    { url: "#", img: { img: kaduna }, id: 8 },
    { url: "#", img: { img: ib }, id: 9 },
    { url: "#", img: { img: benin }, id: 10 },
    { url: "#", img: { img: port }, id: 11 },
  ];
  return (
    <>
      <div className="bodyCont">
        <SetCommission />
        <div className="elec-pictures">
          {data.map((data) => {
            return (
              <Link className="sub-elec-img">
                <img src={data?.img?.img} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ElectricityCommission;
