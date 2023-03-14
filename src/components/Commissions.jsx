import React from "react";

import "../index.css";
import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

//pictures
// import ProfilePicture from "../picture/pics1.jpg";
import CommissionList from "../CommissionComponent/commissionList";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";

const Commissions = () => {
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar text="Dispute" />
        {/* <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Dispute</h4>
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
        </nav> */}
        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6>Agent`s Transaction Dispute</h6>
              <div
                className="d-flex justify-content-between"
                style={{ width: "35%" }}
              >
                <div
                  className="input-top-nav d-flex align-items-center"
                  style={{
                    background: "#f8faff",
                    border: "1px solid #00b3fe",
                    width: "100%",
                  }}
                >
                  <div style={{ color: "#868fa0" }}>
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Service name, Category,Price, e.t.c"
                    style={{ background: "#f8faff" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <CommissionList />
              <Outlet />;
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Commissions;
