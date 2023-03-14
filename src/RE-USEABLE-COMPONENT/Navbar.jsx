import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

// import ProfilePicture from "../picture/pics1.jpg";

function Navbar({ text, input, placeholder }) {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  // console.log(userDetails);

  const TopNav = {
    display: "flex",
    padding: "1rem 3rem",
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

  const inputTopNavDiv = {
    padding: "0 1rem",
    color: "#c4c4c4",
    fontSize: ".8rem",
  };
  return (
    <>
      <nav style={TopNav}>
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
            <div className="profile  d-flex align-items-center">
              <div className="profile-img">
                <img
                  src={`http://89.38.135.41:9800/${userDetails?.data?.data?.logo}`}
                  alt=""
                />
              </div>
              <div className="profile-name ">
                <div>
                  {userDetails?.data?.data?.name}{" "}
                  <span>
                    <AiOutlineDown />
                  </span>
                </div>
                <p>{userDetails?.data?.data?.roleName}</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
