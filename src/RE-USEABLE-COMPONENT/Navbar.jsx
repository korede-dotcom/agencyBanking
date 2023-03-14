import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

import ProfilePicture from "../picture/pics1.jpg";

function Navbar({ text, input, placeholder }) {
  const TopNav = {
    display: "flex",
    padding: "1rem",
    top: "0",
    justifyContent: "space-between",
    backgroundColor: "white",
    position: "sticky",
    zIndex: "10",
  };
  const inputTopNav = {
    border: "1.5px solid #efeded",
    borderRadius: "2rem",
    alignItems: "center",
    // width: "fit-content",
    width: "30rem",
  };

  const inputTopNavInput = {
    border: "none",
    outline: "none",
    width: "100%",
    height: "2.2rem",
    color: "#868fa0",
    fontSize: ".8rem",
    fontWeight: "500",
    borderRadius: "0 2rem 2rem 0",
  };
  // const inputTopNavInpu = inputTopNavInput:placeholder{
  //     font-size: .65rem;
  // }

  const inputTopNavDiv = {
    padding: "0 1rem",
    color: "#868fa0",
  };
  return (
    <>
      <nav /* className="top-nav navbar" */ style={TopNav}>
        <div className=" ">
          <h4>{text}</h4>
        </div>
        {input === "show" && (
          <div className=" d-flex" style={inputTopNav}>
            <div style={inputTopNavDiv}>
              <FaSearch />
            </div>
            <input
              style={inputTopNavInput}
              type="text"
              name=""
              id=""
              className="reuseable-nav-input"
              placeholder={placeholder}
            />
          </div>
        )}

        <div className="right-top-nav-div d-flex">
          <div className="notification">
            <p>.</p>
            <div>
              <FaBell />
            </div>
          </div>
          <Link
            to="/profile"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <div className="profile d-flex align-items-center">
              <div className="profile-img">
                <img src={ProfilePicture} alt="" />
              </div>
              <div className="profile-name ">
                <div>
                  Okorie Emmanuel{" "}
                  <span>
                    <AiOutlineDown />
                  </span>
                </div>
                <p>Super Agent</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
