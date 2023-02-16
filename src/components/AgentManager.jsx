import React from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";

import { FaArrowDown, FaBell } from "react-icons/fa";

//pictures
import ProfilePicture from "../picture/pics1.jpg";
import Agent1 from "./Agent1";

const AgentManagement = () => {
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Agent Management</h4>
          </div>

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
                      <FaArrowDown />
                    </span>
                  </div>
                  <p>Super Agent</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
        <Agent1 />
      </section>
    </main>
  );
};

export default AgentManagement;
