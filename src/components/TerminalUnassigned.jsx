import React, { useState, useEffect } from "react";
import Aos from "aos";
import "../index.css";
import "aos/dist/aos.css";
import Modal from "./Modal";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
//pictures
import FeaturedIcon from "../picture/Featured icon.png";
import Table from "../Table/Table";
import TerminalData from "../Table/terminalData";
import { AiOutlinePlus } from "react-icons/ai";
import SideNavbar from "./SideNavbar";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";

import {
  StyledButton,
  StyledModalBackground,
  StyledModalContent,
  StyledSubmit,
} from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";

function TerminalUnassigned() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const columns = [
    { field: "Agent Name", icon: <ColumnSorting />, header: "Agent Name" },
    { field: "Agent ID", header: "Agent ID" },
    { field: "phone", icon: <ColumnSorting />, header: "Phone Number" },
    {
      field: "Business Name",
      icon: <ColumnSorting />,
      header: "Business Name",
    },
    {
      field: "Email Address",
      icon: <ColumnSorting />,
      header: "Email Address",
    },
    { field: "states", icon: <ColumnSorting />, header: "States" },
    { field: "status", header: "Status" },
  ];
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Terminal Management"
          input="show"
          placeholder="Search Terminal ID, Agent or Agent Managers"
        />
        <>
          <div className="body--content">
            <div className="footer">
              <div className="nav-footer">
                <h6>Terminal</h6>
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
                    className="main-account-aside3-btn1 "
                    onClick={() => setIsOpen(true)}
                    style={{ textAlign: "center" }}
                  >
                    <span className="pe-2">
                      <AiOutlinePlus />
                    </span>{" "}
                    Add New Terminal
                  </button>

                  <Modal open={isOpen}>
                    <StyledModalBackground>
                      <StyledModalContent
                        width="80%"
                        padding=" 3rem 4rem"
                        data-aos="slide-down"
                      >
                        <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                          <p>Add New Terminal</p>

                          <button
                            onClick={() => setIsOpen(false)}
                            style={{ border: "none", background: "white" }}
                          >
                            <span className="fs-4">
                              <FaTimes />
                            </span>
                          </button>
                        </h4>

                        <div className="add-new-terminal-input ">
                          <div className="add-new-terminal ">
                            <div className="sub-modal-content-add-agent ">
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
                            <div className="sub-modal-content-add-agent ">
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
                            <div className="sub-modal-content-add-agent ">
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
                            <div className="sub-modal-content-add-agent ">
                              <Label
                                text="Transaction Limit"
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

                          <div className="add-new-terminal">
                            <div className="sub-modal-content-add-agent ">
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
                            <div className="sub-modal-content-add-agent ">
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
                            <div className="sub-modal-content-add-agent ">
                              <Label
                                text="Assign Agent"
                                type="normal"
                                htmlFor="AssignAgent"
                              />
                              <input
                                type="text"
                                id="AssignAgent"
                                placeholder="Select an existing Agent to terminal (optional"
                              />
                            </div>
                            <div className="sub-modal-content-add-agent mt-4">
                              <StyledSubmit
                                done="done"
                                onClick={() => {
                                  setIsOpen(false);
                                  setCardAdded2(true);
                                }}
                              >
                                Submit
                              </StyledSubmit>
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
                        padding="1rem"
                        width="30%"
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
                      </StyledModalContent>
                    </StyledModalBackground>
                  </Modal>
                </div>
              </div>

              <div className="TerminalLinks py-3 bg-white">
                <Link to="/terminal-management/assigned">
                  <StyledButton>Assigned Terminals</StyledButton>
                </Link>

                <StyledButton assign="assign">
                  Unassigned Terminals
                </StyledButton>
              </div>
              <div className="footer">
                <Table
                  columns={columns}
                  TerminalData={TerminalData}
                  color="terminalData"
                />
              </div>
            </div>
          </div>
        </>
      </section>
    </main>
  );
}

export default TerminalUnassigned;
