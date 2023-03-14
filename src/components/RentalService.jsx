import React, { useState, useEffect } from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";
import { FaSearch } from "react-icons/fa";

//pictures
import Table from "../Table/Table";
import RentalData from "../Table/RentalData";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";
import Selector from "../Libary/Select";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";

const RentalService = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const columns = [
    {
      field: "ASSIGNED AGENT",
      icon: <ColumnSorting />,
      header: "ASSIGNED AGENT",
    },
    { field: "TERMINAL ID", header: "TERMINAL ID" },
    {
      field: "TERMINAL LOCATION",
      icon: <ColumnSorting />,
      header: "TERMINAL LOCATION",
    },
    { field: "CHARGES", icon: <ColumnSorting />, header: "CHARGES" },
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
                  <StyledModalBackground>
                    <StyledModalContent
                      data-aos="slide-down"
                      width="70%"
                      padding="3rem"
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>Add New Service</p>

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
                              text="Service Name"
                              type="require"
                              htmlFor="ServiceName"
                            />
                            <input
                              type="text"
                              id="ServiceName"
                              placeholder="Enter Service Name"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Service ID"
                              type="require"
                              htmlFor="ServiceID"
                            />
                            <input
                              type="text"
                              id="ServiceID"
                              placeholder="Enter Service ID"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
                          <div className="add-new-terminal-input11 ">
                            <Label
                              text="Pricing"
                              type="require"
                              htmlFor="ServicePrice"
                            />
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
                            <Label
                              text="Primary Provider"
                              type="require"
                              htmlFor="PrimaryProvider"
                            />
                            <Selector
                              id="PrimaryProvider"
                              placeholder="Select your default provider"
                            />
                          </div>
                          <div className="add-new-terminal-input1 ">
                            <Label
                              text="Secondary Provider (optional)"
                              type="normal"
                              htmlFor="secondaryprovider"
                            />
                            <Selector
                              id="secondaryprovider"
                              placeholder="Select your secondary provider"
                            />
                          </div>
                        </div>

                        <div className="add-new-terminal ">
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
                    </StyledModalContent>
                  </StyledModalBackground>
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
