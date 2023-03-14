// import React, { useState, useEffect } from "react";

import "../index.css";
import "./reporting.css";
import SideNavbar from "./SideNavbar";
import { FaSearch } from "react-icons/fa";

//pictures
import Table from "../Table/Table";
import { MdFilterList } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import DashBoardData from "../Table/DashBoardData";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";

const Request = () => {
  const columns = [
    { field: "AGENT NAME", icon: <ColumnSorting />, header: "AGENT NAME" },
    { field: "AGENT ID", header: "AGENT ID" },
    {
      field: "RESPONSE MESSAGE",
      icon: <ColumnSorting />,
      header: "RESPONSE MESSAGE",
    },
    { field: "RESP CODE", icon: <ColumnSorting />, header: "RESP CODE" },
    { field: "TRANS. TYPE", icon: <ColumnSorting />, header: "TRANS. TYPE" },
    { field: "AMOUNT", icon: <ColumnSorting />, header: "AMOUNT" },
    { field: "EARNINGS", header: "EARNINGS" },
    { field: "DATE", icon: <ColumnSorting />, header: "DATE" },
    { field: "STATUS", header: "STATUS" },
    {
      field: "TRANSACTION REF.  ",
      icon: <ColumnSorting />,
      header: "TRANSACTION REF. ",
    },
  ];

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Reporting"
          input="show"
          placeholder="Search Terminal ID, Agent or Agent Managers"
        />
        {/* <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Reporting</h4>
          </div>

          <div className="input-top-nav d-flex">
            <div>
              <FaSearch />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Terminal ID, Agent or Agent managers"
            />
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
              <h6>Reporting</h6>
              <div
                className="d-flex justify-content-between"
                style={{ width: "65%" }}
              >
                <div
                  className="input-top-nav d-flex align-items-center"
                  style={{
                    background: "#f8faff",
                    border: "1px solid #00b3fe",
                    width: "60%",
                  }}
                >
                  <div style={{ color: "#868fa0" }}>
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Service name, Category, Price, e.t.c"
                    style={{ background: "#f8faff" }}
                  />
                </div>

                <button
                  style={{
                    border: ".08rem solid #00b3fe",
                    borderRadius: ".3rem",
                    background: "white",
                    justifyContent: "space-around",
                    width: "15%",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                  //   className="main-account-aside3-btn1 "
                  //   onClick={() => setIsOpen(true)}
                >
                  <div style={{ fontSize: "1rem" }}>Filter</div>
                  <span style={{ color: "#1b59f8" }}>
                    <MdFilterList />
                  </span>
                </button>

                {/* <Modal open={isOpen}>
                  <div
                    className="overlay"
                    // onClick={() => {
                    //   setIsOpen(false);
                    //   // setIsDropped(!isDropped);
                    // }}
                    data-aos="slide-down"
                  >
                    <div
                      className="container bg-white mt-3"
                      style={{ padding: "2rem 4rem", borderRadius: ".4rem" }}
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>Add New Service</p>

                        <button
                          onClick={() => setIsOpen(false)}
                          style={{ border: "none", background: "white" }}
                        >
                          X
                        </button>
                      </h4>

                      <div className="add-new-terminal-input ">
                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="ServiceName">Service Name</label>
                            <input
                              type="text"
                              id="ServiceName"
                              placeholder="Enter Service Name"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="ServiceID">Service ID</label>
                            <input
                              type="text"
                              id="ServiceID"
                              placeholder="Enter Service ID"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input11 ">
                            <label htmlFor="ServicePrice">Pricing</label>
                            <div>
                              <input
                                type="text"
                                id="ServicePrice"
                                placeholder="Enter pricing for service"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="fs-3 fw-bold text-dark">
                          Select Provider
                        </div>

                        <div className="add-new-terminal">
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="PrimaryProvider">
                              Primary Provider
                            </label>
                            <input
                              type="text"
                              id="PrimaryProvider"
                              placeholder="Select your default provider"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="secondaryprovider">
                              secondary provider (optional)
                            </label>
                            <input
                              type="text"
                              id="secondaryprovider"
                              placeholder="Select your secondary provider"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal "> */}
                {/* <div className="add-new-terminal-input1 ">
                            <label htmlFor="FullName">Assign Agent</label>
                            <input
                              type="text"
                              id="FullName"
                              placeholder="Select an existing Agent to terminal (optional"
                            />
                          </div> */}
                {/* <div className="add-new-terminal-input11  q">
                            <button onClick={() => setIsOpen(true)}>
                              Submit
                            </button> */}
                {/* <Modal open={isOpen}>
                              <div className="overlay se pt-5">
                                <div
                                  className="modal-content-added a1 h7"
                                  style={{ margin: "auto" }}
                                >
                                  <div className="modal-content-n mb-3">
                                    <div>
                                      <img src={FeaturedIcon} alt="" />
                                    </div>
                                  </div>

                                  <div className="modal-content-card-added">
                                    <h3>Card Added</h3>
                                    <p>
                                      Your Card Details has been successfully
                                      Added.
                                    </p>
                                    <div className="text-end">
                                      <button
                                        onClick={() => {
                                          setIsOpen(false);
                                        }}
                                      >
                                        Back
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Modal> */}
                {/* </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal> */}
              </div>
            </div>

            <div className="startDate-section">
              <div className="date-time-sec">
                <form
                  action=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="start-date">
                    <label htmlFor="startdate">Start Date</label>
                    <div>
                      <input type="date" id="startdate" />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "rgba(0, 0, 0, 0.3)",
                      margin: "0 1rem",
                    }}
                  >
                    -
                  </div>
                  <div className="start-date">
                    <label htmlFor="enddate">End Date</label>
                    <div>
                      <input type="date" id="enddate" />
                    </div>
                  </div>
                </form>
              </div>

              <div className="downloader-sec">
                <button>
                  <span>
                    <HiOutlineDownload />
                  </span>{" "}
                  <div>Download Report</div>
                </button>
              </div>
            </div>
            <div className="footer">
              <Table
                columns={columns}
                DashBoardData={DashBoardData}
                color="DashBoardData"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Request;
