import React, { useState, useEffect } from "react";

import "../index.css";
import SideNavbar from "./SideNavbar";
// import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TbSelector } from "react-icons/tb";

//pictures
// import ProfilePicture from "../picture/pics1.jpg";
import Table from "../Table/Table";
import RentalData from "../Table/RentalData";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";

const RentalService = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const columns = [
    { field: "ASSIGNED AGENT", icon: <TbSelector />, header: "ASSIGNED AGENT" },
    { field: "TERMINAL ID", header: "TERMINAL ID" },
    {
      field: "TERMINAL LOCATION",
      icon: <TbSelector />,
      header: "TERMINAL LOCATION",
    },
    { field: "CHARGES", icon: <TbSelector />, header: "CHARGES" },
    { field: "STATUS", header: "STATUS" },

    {
      field: "FLAG/UNFLAG",
      header: "FLAG/UNFLAG",
    },
    {
      field: "EXEMPT AGENT",
      header: "EXEMPT AGENT",
    },
    {
      field: "GRANT CONCESSION",
      header: "GRANT CONCESSION",
    },
    {
      field: "PLACE LIEN",
      header: "PLACE LIEN",
    },
  ];

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Rental Charges"
          input="show"
          placeholder="Search Terminal ID, Agent or Agent Managers"
        />
        {/* <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Rental Charges</h4>
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
              <h6>Rental Service</h6>
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
                  className="main-account-aside3-btn1 "
                  onClick={() => setIsOpen(true)}
                >
                  View POS Request
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
                      className="container bg-white mt-3"
                      style={{ padding: "2rem 4rem", borderRadius: ".4rem" }}
                      data-aos="slide-down"
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

                        <div className="fs-4 ps-3 fw-bold text-dark">
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

                        <div className="add-new-terminal ">
                          {/* <div className="add-new-terminal-input1 ">
                            <label htmlFor="FullName">Assign Agent</label>
                            <input
                              type="text"
                              id="FullName"
                              placeholder="Select an existing Agent to terminal (optional"
                            />
                          </div> */}
                          <div className="add-new-terminal-input11  q">
                            <button onClick={() => setIsOpen(true)}>
                              Submit
                            </button>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="footer">
              <Table
                columns={columns}
                RentalData={RentalData}
                color="RentalData"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RentalService;
