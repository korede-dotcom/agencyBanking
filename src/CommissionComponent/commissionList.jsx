import "./commissionList.css";
import React from "react";
import { TbSelector } from "react-icons/tb";
import { NavLink } from "react-router-dom";

//pictures
import PhoneCall from "./pictures/Phone.svg";
import Data from "./pictures/data.svg";
import Internet from "./pictures/internet.svg";
import SmartTv from "./pictures/Smart Tv.svg";
import Wifi from "./pictures/wifi.svg";
import Other from "./pictures/other.svg";

function CommissionList() {
  const data = [
    {
      name: "AIRTIME",
      url: "airtime",
      img: { img: PhoneCall },
      icon: <TbSelector />,
      id: 1,
    },
    { name: "DATA", url: "Data", img: { img: Data }, id: 2 },
    { name: "CABLE TV", url: "CableTV", img: { img: Wifi }, id: 3 },
    { name: "ELECTRICITY", url: "Electricity", img: { img: SmartTv }, id: 4 },
    { name: "INTERNET", url: "internet", img: { img: Internet }, id: 5 },
    { name: "OTHERS", url: "others", img: { img: Other }, id: 6 },
  ];

  let navstyle1 = ({ isActive }) => {
    return {
      borderBottom: isActive
        ? ".13rem solid #1b59f8"
        : ".13rem solid transparent",
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
            <div className="d-flex align-items-center">
              <div style={{ width: "25px" }}>
                <img className="w-100" src={links?.img?.img} alt="" />
              </div>
              <p className="m-0 ps-2">{links.name}</p>
            </div>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default CommissionList;
