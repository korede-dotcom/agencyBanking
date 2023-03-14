import "./commissionList.css";
import React from "react";
import { TbSelector } from "react-icons/tb";
import { NavLink } from "react-router-dom";

//pictures
import PhoneCall from "./pictures/phone-call.png";
import Data from "./pictures/data.png";
import Internet from "./pictures/internet.png";
import SmartTv from "./pictures/SmartTv.png";
import Wifi from "./pictures/wifi.png";
import Other from "./pictures/other.png";

function CommissionList() {
  const data = [
    {
      name: "AIRTIME",
      url: "airtime",
      img: { PhoneCall },
      icon: <TbSelector />,
      id: 1,
    },
    { name: "DATA", url: "Data", img: { Data }, id: 2 },
    { name: "CABLE TV", url: "CableTV", img: { Wifi }, id: 3 },
    { name: "ELECTRICITY", url: "Electricity", img: { SmartTv }, id: 4 },
    { name: "INTERNET", url: "internet", img: { Internet }, id: 5 },
    { name: "OTHERS", url: "others", img: { Other }, id: 6 },
  ];

  let navstyle1 = ({ isActive }) => {
    return {
      borderBottom: isActive
        ? ".2rem solid #1b59f8"
        : ".2rem solid transparent",
      color: isActive ? "#1b59f8" : "black",
    };
  };
  return (
    <nav className="navbar navbar-brand ">
      {data.map((links) => {
        return (
          <NavLink
            className="navLink"
            to={links?.url}
            key={links?.id}
            style={navstyle1}
          >
            <div>
              <img src={links?.img} alt="" />
              <p className="m-0">{links.name}</p>
            </div>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default CommissionList;
