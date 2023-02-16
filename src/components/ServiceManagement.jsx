import React, { useState, useEffect } from "react";

import "../index.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import { FaArrowDown, FaBell, FaSearch } from "react-icons/fa";
import { TbSelector } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
//pictures
import ProfilePicture from "../picture/pics1.jpg";
import Table from "../Table/Table";
import ProviderData from "../Table/ProviderData";
import { AiOutlinePlus } from "react-icons/ai";

const ServiceManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const columns = [
    { field: "SERVICE NAME", icon: <TbSelector />, header: "SERVICE NAME" },
    { field: "CATEGORY", header: "CATEGORY" },
    { field: "PRICE", icon: <TbSelector />, header: "PRICE" },
    { field: "PROVIDER", icon: <TbSelector />, header: "PROVIDER" },
    {
      field: "ACTIVE/DE-ACTIVE",
      icon: <TbSelector />,
      header: "ACTIVE/DE-ACTIVE",
    },
  ];
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Service Management</h4>
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
              <h6>Service / Providers</h6>
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
                    placeholder="Search Service name, Category,Price, e.t.c"
                    style={{ background: "#f8faff" }}
                  />
                </div>

                <button
                  className="main-account-aside3-btn1 "
                  onClick={() => setIsOpen(true)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="pe-2">
                    <AiOutlinePlus />
                  </span>{" "}
                  Add New Service
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
                ProviderData={ProviderData}
                color="ProviderData"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceManagement;
