import React, { useState, useEffect } from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { FaArrowDown, FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { TbSelector } from "react-icons/tb";

//pictures
import ProfilePicture from "../picture/pics1.jpg";
import FeaturedIcon from "../picture/Featured icon.png";
import FeaturedIcon2 from "../picture/FeaturedIcon2.png";
import Table from "../Table/Table";
import StaffData from "../Table/StaffData";
import { AiOutlinePlus } from "react-icons/ai";

const Staff = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const columns = [
    { field: "AGENT NAME", icon: <TbSelector />, header: "AGENT NAME" },
    { field: "AGENT ID", header: "AGENT ID" },
    { field: "PHONE NUMBER", icon: <TbSelector />, header: "PHONE NUMBER" },
    { field: "EMAIL ADDRESS", icon: <TbSelector />, header: "EMAIL ADDRESS" },
    { field: "STATUS", header: "STATUS" },
  ];
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Staffs</h4>
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
        </nav>
        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6>Staffs</h6>
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
                    placeholder="Search Terminal ID, location, Serial Number e.t.c"
                    style={{ background: "#f8faff" }}
                  />
                </div>

                <button
                  className="main-account-aside3-btn1  d-flex align-items-center"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="pe-2 ">
                    <AiOutlinePlus />
                  </span>{" "}
                  Add New Staffs
                </button>

                <Modal open={isOpen}>
                  <div
                    className="overlay"
                    // onClick={() => {
                    //   setIsOpen(false);
                    //   // setIsDropped(!isDropped);
                    // }}
                  >
                    <div
                      className="container bg-white mt-5"
                      style={{ padding: "3rem 4rem", borderRadius: ".4rem" }}
                      data-aos="slide-down"
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>Add New Staff</p>

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
                            <label htmlFor="TerminalID">Terminal ID</label>
                            <input
                              type="text"
                              id="TerminalID"
                              placeholder="Enter Terminal ID"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="TerminalManufacturer">
                              Terminal Manufacturer
                            </label>
                            <input
                              type="text"
                              id="TerminalManufacturer"
                              placeholder="Enter Terminal Manufacturer"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="SerialNumber">
                              Terminal Serial Number
                            </label>
                            <input
                              type="text"
                              id="SerialNumber"
                              placeholder="Enter Terminal Serial Number"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="TerminalManufacturer">
                              Transaction Limit
                            </label>
                            <input
                              type="text"
                              id="TerminalManufacturer"
                              placeholder="Enter Terminal Manufacturer"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal">
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="TerminalLocation">
                              Terminal Location
                            </label>
                            <input
                              type="text"
                              id="TerminalLocation"
                              placeholder="Enter Terminal Location"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="TerminalState">State</label>
                            <input
                              type="text"
                              id="TerminalState"
                              placeholder="Enter your Terminal State"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input1 ">
                            <label htmlFor="FullName">Assign Agent</label>
                            <input
                              type="text"
                              id="FullName"
                              placeholder="Select an existing Agent to terminal (optional"
                            />
                          </div>
                          <div className="sub-modal-content-add-agent mt-4">
                            <button
                              onClick={() => {
                                setIsOpen(false);
                                setCardAdded(true);
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>

                <Modal open={cardAdded}>
                  <div className="overlay">
                    <div
                      className="container bg-white text-dark"
                      style={{
                        padding: "1rem",
                        borderRadius: ".4rem",
                        width: "30%",
                        marginTop: "10rem",
                      }}
                      data-aos="zoom-up"
                    >
                      <div className=" ">
                        <div className="d-flex justify-content-between">
                          <div /* style={{ width: "50%" }} */>
                            <img
                              style={{ width: "80%" }}
                              src={FeaturedIcon2}
                              alt=""
                            />
                          </div>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                            }}
                            onClick={() => {
                              setCardAdded(false);
                            }}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </div>

                      <div className="modal-content-card-added pt-2 text-dark">
                        <h5>Card Added</h5>
                        <p style={{ fontSize: ".8rem" }}>
                          Your Card Details has been successfully Added.
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <button
                          onClick={() => {
                            setCardAdded(false);
                          }}
                          className=""
                          style={{
                            border: "1px solid #868fa0",
                            background: "white",
                            width: "45%",
                            fontSize: ".8rem",
                            borderRadius: ".4rem",
                            padding: ".5rem 0",
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setCardAdded(false);
                            setCardAdded2(true);
                          }}
                          className=""
                          style={{
                            border: "none",
                            background: "#1b59f8",
                            color: "white",
                            width: "45%",
                            fontSize: ".8rem",
                            borderRadius: ".4rem",
                            padding: ".5rem 0",
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>

                <Modal open={cardAdded2}>
                  <div
                    className="overlay"
                    onClick={() => {
                      setCardAdded2(false);
                    }}
                  >
                    <div
                      className="container bg-white text-dark"
                      style={{
                        padding: "1rem",
                        borderRadius: ".4rem",
                        width: "30%",
                        marginTop: "10rem",
                      }}
                      data-aos="zoom-up"
                    >
                      <div className="modal-content-n mb-3">
                        <div>
                          <img src={FeaturedIcon} alt="" />
                        </div>
                      </div>

                      <div className="modal-content-card-added text-dark">
                        <h4>Card Added</h4>
                        <p>Your Card Details has been successfully Added.</p>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="footer">
              <Table
                columns={columns}
                StaffData={StaffData}
                color="StaffData"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Staff;
