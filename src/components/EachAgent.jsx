// import React, { useState } from 'react';

import "../index.css";
import "./eachagent.css";
import "./modal.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";

import { AiOutlineDown } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaBell,
  FaSearch,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

//pictures
import ProfilePicture from "../picture/pics1.jpg";
import BlueChart from "../picture/Vector.png";
import RedChart from "../picture/Vector (1).png";
// import Modal from "./Modal";

const EachAgent = ({ userAgentDetails }) => {
  // const [isOpen, setIsOpen] = useState(false);

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
              fontSize: ".9rem",
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaArrowLeft /> Back
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

          <section className="eachagent-myservice">
            <div className="eachagent-myservice-header d-flex">
              <h5>My Service</h5>
              <select name="ServiceFilter" id="" className="ms-5">
                <option value="Alphabetically">Alphabetically</option>
                <option value="MostUsedService">Most Used Service</option>
                <option value="LatestService">Latest Service</option>
                <option value="RarelyUsedService">Rarely Used Service</option>
              </select>
            </div>

            <div className="eachagent-myservice-body d-flex justify-content-between">
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>DSTV</h4>
                <div>
                  Active{" "}
                  <span style={{ color: "green" }}>
                    <FaToggleOn />
                  </span>
                </div>
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>Airtime</h4>
                <div>
                  Disabled{" "}
                  <span style={{ color: "#868fa0" }}>
                    <FaToggleOff />
                  </span>
                </div>
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>GOTV</h4>
                <div>
                  Active{" "}
                  <span style={{ color: "green" }}>
                    <FaToggleOn />
                  </span>
                </div>
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>Electricity</h4>
                <div>
                  Active{" "}
                  <span style={{ color: "green" }}>
                    <FaToggleOn />
                  </span>
                </div>
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>FIRS</h4>
                <div>
                  Active{" "}
                  <span style={{ color: "green" }}>
                    <FaToggleOn />
                  </span>
                </div>
              </div>
              <div
                className="sub-eachagent-myservice-body"
                style={{ width: "13%" }}
              >
                <h4>FRSC</h4>
                <div>
                  Disabled{" "}
                  <span style={{ color: "#868fa0" }}>
                    <FaToggleOff />
                  </span>
                </div>
              </div>

              <Link
                to="/Agent-Management/Agents/each-agent/new-service"
                className="sub-eachagent-myservice-body-addnew"
                style={{ width: "10%" }}
              >
                <button>
                  <p>+</p>
                  <div>Add New Services</div>
                </button>
              </Link>
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
