import React, { useState, useEffect } from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import { FaSearch } from "react-icons/fa";

//pictures
import FeaturedIcon from "../picture/Featured icon.png";
import Table from "../Table/Table";
import StaffData from "../Table/StaffData";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";

const Staff = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const columns = [
    { field: "AGENT NAME", icon: <ColumnSorting />, header: "AGENT NAME" },
    { field: "AGENT ID", header: "AGENT ID" },
    { field: "PHONE NUMBER", icon: <ColumnSorting />, header: "PHONE NUMBER" },
    {
      field: "EMAIL ADDRESS",
      icon: <ColumnSorting />,
      header: "EMAIL ADDRESS",
    },
    { field: "STATUS", header: "STATUS" },
  ];
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar text="Staffs" />
        {/* <nav className="top-nav navbar">
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
        </nav> */}
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
                  <StyledModalBackground>
                    <StyledModalContent
                      padding="3rem"
                      width="70%"
                      data-aos="slide-down"
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>Add New Staff</p>

                        <button
                          onClick={() => setIsOpen(false)}
                          style={{ border: "none", background: "white" }}
                        >
                          <CancelBtn />
                        </button>
                      </h4>

                      <div className="add-new-terminal-input ">
                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Terminal ID"
                              type="require"
                              htmlFor="TerminalID"
                            />
                            <input
                              type="text"
                              id="TerminalID"
                              placeholder="Enter Terminal ID"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Terminal Manufacturer"
                              type="require"
                              htmlFor="TerminalManufacturer"
                            />
                            <input
                              type="text"
                              id="TerminalManufacturer"
                              placeholder="Enter Terminal Manufacturer"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Terminal Serial Number"
                              type="require"
                              htmlFor="SerialNumber"
                            />
                            <input
                              type="text"
                              id="SerialNumber"
                              placeholder="Enter Terminal Serial Number"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Transaction Limit"
                              type="require"
                              htmlFor="TransactionLimit"
                            />
                            <input
                              type="text"
                              id="TransactionLimit"
                              placeholder="Enter Terminal Manufacturer"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal">
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Terminal Location"
                              type="require"
                              htmlFor="TerminalLocation"
                            />
                            <input
                              type="text"
                              id="TerminalLocation"
                              placeholder="Enter Terminal Location"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="State"
                              type="require"
                              htmlFor="TerminalState"
                            />
                            <input
                              type="text"
                              id="TerminalState"
                              placeholder="Enter your Terminal State"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Assign Agent"
                              type="normal"
                              htmlFor="AssignAgent"
                            />
                            <input
                              type="text"
                              id="AssignAgent"
                              placeholder="Select an existing Agent to terminal (optional)"
                            />
                          </div>
                          <div className="sub-modal-content-add-agent mt-4">
                            <button
                              onClick={() => {
                                setIsOpen(false);
                                setCardAdded2(true);
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>

                <Modal open={cardAdded2}>
                  <StyledModalBackground
                    onClick={() => {
                      setCardAdded2(false);
                    }}
                  >
                    <StyledModalContent
                      data-aos="zoom-up"
                      width="30%"
                      padding="1rem"
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
                    </StyledModalContent>
                  </StyledModalBackground>
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
