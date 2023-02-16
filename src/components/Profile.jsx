import React, { useState, useEffect } from "react";

import "../index.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import { FaArrowDown, FaBell, FaLock, FaSearch } from "react-icons/fa";

//pictures
import ProfilePicture from "../picture/pics1.jpg";
import BackgroundPicture from "../picture/Cover.png";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Profile Management</h4>
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
              <h6>My Profile</h6>
              <button
                className="main-account-aside3-btn1 "
                onClick={() => setIsOpen(true)}
              >
                <FaLock /> <span className="ps-2">Change Password</span>
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
                          <button onClick={() => setIsOpen(false)}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="my-profile-aside2">
              <div
                className="my-profile-aside2 "
                style={{ backgroundImage: `url(${BackgroundPicture})` }}
              >
                <div className="my-profile-aside2-img">
                  <img src={ProfilePicture} alt="" />
                  <h5>Okorie Emmanuel</h5>
                </div>
              </div>

              <div className="my-profile-aside3 row">
                <div className="my-profile-aside3-input1 col-6">
                  <label htmlFor="FullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    readOnly
                    placeholder="Okorie Emmanuel"
                  />
                </div>
                <div className="my-profile-aside3-input2 col-6">
                  <label htmlFor="Email">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Email"
                    readOnly
                    placeholder="okorieemmanuel167@g,ail.com"
                  />
                </div>
              </div>

              <div className="my-profile-aside3 row">
                <div className="my-profile-aside3-input1 col-6">
                  <label htmlFor="">Business Name</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    placeholder="TM30 INTERNATIONAL LIMITED"
                  />
                </div>
                <div className="my-profile-aside3-input2 col-3">
                  <label htmlFor="">Number of Agents</label>
                  <input
                    type="number"
                    className="form-control"
                    readOnly
                    placeholder="234"
                  />
                </div>
                <div className="my-profile-aside3-input2 col-3">
                  <label htmlFor="">Number of Terminals</label>
                  <input
                    type="number"
                    className="form-control"
                    readOnly
                    placeholder="300"
                  />
                </div>
              </div>

              <div className="my-profile-aside3 ">
                <div className="my-profile-aside3-input1 ">
                  <label htmlFor="">Business Address</label>
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    placeholder="Enter Your Business Address"
                  />
                </div>
              </div>

              <div className="my-profile-aside3 row mt-4">
                <div className="my-profile-aside3-input1 col-6">
                  <input
                    type="text"
                    className="form-control"
                    readOnly
                    placeholder="City"
                  />
                </div>
                <div className="my-profile-aside3-input2 col-4">
                  <input
                    type="number"
                    className="form-control"
                    readOnly
                    placeholder="State/Province"
                  />
                </div>
                <div className="my-profile-aside3-input2 col-2">
                  <input
                    type="number"
                    className="form-control"
                    readOnly
                    placeholder="Zip Code"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
