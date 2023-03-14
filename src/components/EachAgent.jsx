import React, { useState, useEffect } from "react";

import "../index.css";
import "./eachagent.css";
import "./modal.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";

import { AiOutlineDown } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaBell,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

//pictures
import ProfilePicture from "../picture/pics1.jpg";
import BlueChart from "../picture/Vector.png";
import RedChart from "../picture/Vector (1).png";
import FeaturedIcon from "../picture/Featured icon.png";
import FeaturedIcon2 from "../picture/FeaturedIcon2.png";
import Modal from "./Modal";
import ToggleBtn from "../RE-USEABLE-COMPONENT/ToggleBtn";

const EachAgent = ({ userAgentDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const navigate = useNavigate();

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Agent Management</h4>
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

        <div className="back-section">
          <button
            className="ms-4 mt-3 text-primary"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <div className="d-flex pe-1 fw-bold fs-4">
              <BsArrowLeft />
            </div>{" "}
            <div>Back</div>
          </button>
        </div>

        {/* <Modal open={isOpen}> */}
        <div className="body--content">
          <div className="sec2 ms-1 d-flex justify-content-between">
            <div className="sec2-div1 bg-white" style={{ width: "24%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Wallet Balance</p>
                  <h4 className="pt-2 ">#100,000.00</h4>
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small>5.5%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "23%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Commission</p>
                  <h4 className="pt-2 ">80,131.00</h4>
                </div>
              </div>
              <aside>
                <div>
                  <img src={RedChart} alt="" />
                  <small style={{ color: "red" }}>2.1%</small>
                </div>
                <span>down from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "23%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Sucessful Transactions</p>
                  <h4 className="pt-2 ">1,443</h4>
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small>1.3%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "25%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Failed Transaction</p>
                  <h4 className="pt-2 ">288</h4>
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small>1.3%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>
          </div>

          <section className="eachagent-myservice mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="eachagent-myservice-header d-flex">
                <h5>My Service</h5>
                <select name="ServiceFilter" id="" className="ms-5">
                  <option value="Alphabetically">Alphabetically</option>
                  <option value="MostUsedService">Most Used Service</option>
                  <option value="LatestService">Latest Service</option>
                  <option value="RarelyUsedService">Rarely Used Service</option>
                </select>
              </div>
              <div
                className="pe-3"
                style={{
                  color: "#1b59f8",
                  fontSize: ".85rem",
                  fontWeight: "600",
                }}
              >
                Set New Service Charges
              </div>
            </div>

            <div className="eachagent-myservice-body d-flex justify-content-between">
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>DSTV</h4>
                <ToggleBtn />
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>Airtime</h4>
                <ToggleBtn />
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>GOTV</h4>
                <ToggleBtn />
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>Electricity</h4>
                <ToggleBtn />
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>FIRS</h4>
                <ToggleBtn />
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>FRSC</h4>
                <ToggleBtn />
              </div>

              <div
                className="sub-eachagent-myservice-body-addneww"
                style={{ width: "10%" }}
              >
                <button
                  className="sub-eachagent-myservice-body-addneww-btn"
                  onClick={() => setIsOpen(true)}
                >
                  <p>+</p>
                  <div>Add New Services</div>
                </button>

                <Modal open={isOpen}>
                  <div className="overlay">
                    <div
                      className="container bg-white mt-5 text-dark w-50"
                      style={{ padding: "3rem 4rem", borderRadius: ".4rem" }}
                      data-aos="slide-down"
                    >
                      <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                        <h4>My Service</h4>
                        <div className="new-card-button">
                          <button onClick={() => setIsOpen(false)}>X</button>
                        </div>
                      </div>

                      <div className="modal-content-sec1-body">
                        <div className="modal-content-sec1-body-form">
                          <div className="sub-modal-content-sec1-body-form">
                            <input
                              type="checkbox"
                              id="DSTV"
                              className="form-check-input"
                            />
                            <label htmlFor="DSTV">DSTV</label>
                          </div>
                          <div className="sub-modal-content-sec1-body-form">
                            <input
                              type="checkbox"
                              id="Airtime"
                              className="form-check-input"
                            />
                            <label htmlFor="Airtime">Airtime</label>
                          </div>
                          <div className="sub-modal-content-sec1-body-form">
                            <input
                              type="checkbox"
                              id="GOTV"
                              className="form-check-input"
                            />
                            <label htmlFor="GOTV">GOTV</label>
                          </div>
                          <div className="sub-modal-content-sec1-body-form">
                            <input
                              type="checkbox"
                              id="Electricity"
                              className="form-check-input"
                            />
                            <label htmlFor="Electricity">Electricity</label>
                          </div>
                          <div className="sub-modal-content-sec1-body-form">
                            <input
                              type="checkbox"
                              id="FIRS"
                              className="form-check-input"
                            />
                            <label htmlFor="FIRS">FIRS</label>
                          </div>
                          <div className="sub-modal-content-sec1-body-form">
                            <input
                              type="checkbox"
                              id="FRSC"
                              className="form-check-input"
                            />
                            <label htmlFor="FRSC">FRSC</label>
                          </div>
                        </div>

                        <div className="modal-content-sec1-body-add">
                          <h5>Add New Services</h5>
                          <p>Select from the list of services provided below</p>
                          <label className="wq" htmlFor="NURTW">
                            Select All
                          </label>

                          <div className="modal-content-sec1-body-form">
                            <div className="sub-modal-content-sec1-body-form">
                              <input
                                type="checkbox"
                                id="NURTW"
                                className="form-check-input"
                              />
                              <label htmlFor="NURTW">NURTW</label>
                            </div>
                          </div>
                        </div>
                        <div className="modal-content-payment-method-submit">
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              setCardAdded(true);
                            }}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                      {/* <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>Add New Terminal</p>

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
                      </div> */}
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

            <Link to="/ViewAllService" style={{ textDecoration: "none" }}>
              <div className="eachagent-myservice-footer text-end">
                <div>View All Service</div>
              </div>
            </Link>
          </section>

          <div className="footer">
            <div className="nav-footer">
              <h6>All Transactions</h6>
            </div>
            <div className="body-footer">
              <div
                className="head-body-footer row py-3"
                style={{ background: "#fafafa", color: " #868fa0" }}
              >
                <div className="col-2">
                  RESPONSE MESSAGE <AiOutlineDown />
                </div>
                <div className="col-1">
                  RESP. CODE <AiOutlineDown />{" "}
                </div>
                <div className="col-2">
                  TRANSACTION TYPE <AiOutlineDown />
                </div>
                <div className="col-1">
                  AMOUNT <AiOutlineDown />
                </div>
                <div className="col-1">
                  EARNINGS <AiOutlineDown />
                </div>
                <div className="col-1">
                  DATE <AiOutlineDown />
                </div>
                <div className="col-2">
                  STATUS <AiOutlineDown />
                </div>
                <div className="col-2">
                  TRANSACTION REF. <AiOutlineDown />
                </div>
              </div>
            </div>
            <div className="foot-footer bg-white">
              <p>Showing 1 to 5 of 100 entries</p>
              <div className="sub-foot-footer">
                <div className="previous">
                  <FaArrowLeft />
                  Previous
                </div>
                <div className="n1">1</div>
                <div className="n2">2</div>
                <div className="n2">3</div>
                <div className="n2">4</div>
                <div className="n2">...</div>
                <div className="n2">10</div>
                <div className="next">
                  Next <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Modal> */}
      </section>
    </main>
  );
};

export default EachAgent;
