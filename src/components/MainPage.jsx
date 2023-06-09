import "./MainPage.css";
import "./modal2.css";
import "./modal.css";
import axios from "axios";

import React, { useState } from "react";
import SideNavbar from "./SideNavbar";

import { FaSearch } from "react-icons/fa";

import { AiOutlineRight } from "react-icons/ai";

import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//pictures
import RedChart from "../picture/Vector (1).png";
import BlueChart from "../picture/Vector.png";
import BlueTick from "../picture/BlueTick.svg";
import Cancel from "../picture/Cancel.svg";
import Chart from "../picture/chart.svg";
import Family from "../picture/family.svg";
import Laptop from "../picture/Laptop.svg";
import Paid from "../picture/paid.svg";
import Payment from "../picture/payment.svg";
import POS from "../picture/pos.svg";
// import SmallGraph from "../picture/Small Graph.png";

//Charts
import BarCharts from "../chart/bar";
import PieCharts from "../chart/pieChart";
import Radial from "../chart/radial";
import Modal from "./Modal";
import { useEffect } from "react";
import Table from "../Table/Table";
import DashBoardData from "../Table/DashBoardData";
import AreaChart1 from "../chart/AreaChart1";
  //eslint-disable-next-line
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AreaChart2 from "../chart/AreaChart2";
import AreaChart3 from "../chart/Areachart3";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
// import "./table.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [timeFrames, setTimeFrames] = useState(
    localStorage.getItem("timeFrame") || "All"
  );

  let timeFrameModal = [
    { name: "Last 7 Days", value: "Last 7 Days", id: 1 },
    { name: "This Month", value: "This Month", id: 2 },
    { name: "This Year", value: "This Year", id: 3 },
    { name: "Custom", value: "Custom", id: 4 },
  ];

  let peopleModal = [
    { name: "All Users Roles", value: "AllUsersRoles", id: "AllUsersRoles" },
    { name: "Agent Managers", value: "AgentManagers", id: "AgentManagers" },
    { name: "Agents", value: "Agents", id: "Agents" },
  ];

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

  //eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  //eslint-disable-next-line
  const [postPerPage, setPostPerPage] = useState(10);
  const [TotalTransaction, setTotalTransaction] = useState(0);
  const [TotalCommission, setTotalCommission] = useState(0);
  const [totalAgentManager, setTotalAgentManager] = useState(0);
  const [TotalAgents, setTotalAgents] = useState(0);

  const secondSlice = currentPage * postPerPage;
  const firstSlice = secondSlice - postPerPage;
  const formattedData = DashBoardData.slice(firstSlice, secondSlice);
  //eslint-disable-next-line
  const dataLength = DashBoardData.length;
  // const datag = dataLength / postPerPage;

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const configDashboard = {
    headers: {
      Authorization: `bearer ${userDetails?.data?.token}`,
    },
  };

  const fetchDashboard = async () => {
    await axios
      .get(`${process.env.REACT_APP_HTTP_ROUTER}/dashboard`, configDashboard)
      .then((res) => {
        setTotalTransaction(res?.data?.data?.balance.wallet);
        setTotalAgentManager(res?.data?.data?.total_manager);
        setTotalAgents(res?.data?.data?.total_agent);
        setTotalCommission(res?.data?.data?.balance?.commission);
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };
  useEffect(() => {
    localStorage.setItem("timeFrame", timeFrames);
    fetchDashboard();
  //eslint-disable-next-line
  }, []);

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Dashboard"
          input="show"
          placeholder="Search Terminal ID, Agent and Agent Managers"
        />

        <div className="main-body container-fluid p-4">
          <div className="row sec1">
            <div className="jj-mother-div ">
              <div className="jj d-flex">
                <p className="m-0">Timeframe: </p>
                <div>All-time</div>
              </div>
              <button onClick={() => setIsOpen(true)} className="jj-icon">
                <RiArrowDownSFill />
              </button>
              <Modal open={isOpen}>
                <div className="overlay">
                  <div className="modal-content1">
                    <div className="d-flex r justify-content-between">
                      <div className="jj d-flex">
                        <p className="m-0">Timeframe: </p>
                        <div>{timeFrames}</div>
                      </div>

                      <button
                        onClick={() => setIsOpen(false)}
                        className="jj-icon"
                      >
                        <RiArrowUpSFill />
                      </button>
                    </div>

                    <div className="timeframe-btn-div">
                      {timeFrameModal.map((timeFrame) => {
                        return (
                          <div className="timeframe-btn" key={timeFrame.id}>
                            <button
                              onClick={(e) =>
                                setTimeFrames(e.target.textContent)
                              }
                            >
                              {timeFrame.name}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="jj-mother-div ">
              <div className="jj d-flex">
                <p className="m-0">User Roles: </p>
                <div>All</div>
              </div>
              <button onClick={() => setIsOpen2(true)} className="jj-icon">
                <RiArrowDownSFill />
              </button>
              <Modal open={isOpen2}>
                <div className="overlay">
                  <div className="modal-content22">
                    <div className="d-flex  justify-content-between">
                      <div className="jj d-flex">
                        <p className="m-0">People: </p>
                        <div>Multiple Selected</div>
                      </div>
                      <button
                        onClick={() => setIsOpen2(false)}
                        className="jj-icon"
                      >
                        <RiArrowUpSFill />
                      </button>
                    </div>

                    <div className="setSearch">
                      <div className="setSearch-array">...</div>
                      <div className="setSearch-input">
                        <div className="setSearch-input-icon">
                          <FaSearch />
                          <input type="text" id="" placeholder="Search" />
                        </div>
                      </div>
                    </div>

                    <div className="timeframe-btn-div ">
                      <div className="group-div">
                        <div className="group">GROUPS</div>

                        {peopleModal.map((peopleModal) => {
                          return (
                            <div className="timeframe-radio">
                              <input type="radio" name="" id={peopleModal.id} />
                              <label htmlFor={peopleModal.value}>
                                {peopleModal.name}
                              </label>
                            </div>
                          );
                        })}
                      </div>

                      <div className="people-agent-managers-div">
                        <div className="group">Agent Managers</div>
                        <div className="timeframe-radio">
                          <input type="radio" name="" id="" />
                          <label htmlFor="">James Olayinka</label>
                        </div>
                        <div className="timeframe-radio">
                          <input type="radio" name="" id="" />
                          <label htmlFor="">Shola Adeniyi</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="jj-mother-div ">
              <div className="jj d-flex">
                <p className="m-0">Region (Location): </p>
                <div>All</div>
              </div>
              <button className="jj-icon">
                <RiArrowDownSFill />
              </button>
            </div>
          </div>

          <div className="sec2 ms-1 d-flex justify-content-between my-3">
            <div className="sec2-div1 bg-white" style={{ width: "27%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Transaction (Naira)</p>
                  <h4>
                    <span> &#x20A6;</span>
                    {TotalTransaction}
                  </h4>
                </div>
                <div className="fImg">
                  <img src={Chart} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small style={{ color: "green" }}>5.5%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "24%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Earning/Commission</p>
                  <h4>
                    <span> &#x20A6;</span>
                    {TotalCommission}
                  </h4>
                </div>
                <div className="fImg">
                  <img src={BlueTick} alt="" />
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
                  <p>Total Successful Transaction</p>
                  <h4>16,443</h4>
                </div>
                <div className="fImg">
                  <img src={Paid} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small style={{ color: "green" }}>1.3%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "20%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Failed Transaction</p>
                  <h4>1,288</h4>
                </div>
                <div className="fImg">
                  <img src={Cancel} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small style={{ color: "green" }}>1.2%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>
          </div>

          <div className="sec2 ms-1 d-flex justify-content-between my-3">
            <div className="sec2-div1 bg-white" style={{ width: "24%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Number Agent Managers</p>
                  <h4>{totalAgentManager}</h4>
                </div>
                <div className="fImg">
                  <img src={Laptop} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small style={{ color: "green" }}>1.3%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "23%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Number Of Agents</p>
                  <h4>{TotalAgents}</h4>
                </div>
                <div className="fImg">
                  <img src={Payment} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small style={{ color: "green" }}>5.5%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "23%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Number of Terminals</p>
                  <h4>5,783</h4>
                </div>
                <div className="fImg">
                  <img src={POS} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={BlueChart} alt="" />
                  <small style={{ color: "green" }}>1.3%</small>
                </div>
                <span>up from last week</span>
              </aside>
            </div>

            <div className="sec2-div1 bg-white" style={{ width: "25%" }}>
              <div className="sub-sec2-div1">
                <div className="trans">
                  <p>Total Numbers of Transaction</p>
                  <h4>66,503</h4>
                </div>
                <div className="fImg">
                  <img src={Family} alt="" />
                </div>
              </div>
              <aside>
                <div>
                  <img src={RedChart} alt="" />
                  <small style={{ color: "red" }}>1.2%</small>
                </div>
                <span>down from last week</span>
              </aside>
            </div>
          </div>

          <div className="barchart-section d-flex justify-content-between">
            <div className="chart-sec ms-1">
              <div className="div-top-of-barchart d-flex justify-content-between">
                <p>Transactions Activities</p>
                <p>
                  Month{" "}
                  <span>
                    {" "}
                    <RiArrowDownSLine />
                  </span>
                </p>
              </div>
              <div className="chart">
                <BarCharts />
                {/* <AreaChart1 /> */}
              </div>
            </div>

            <div className="sec-beside-chart">
              <div className="sub-sec-beside-chart">
                <p>Terminals</p>
                <h5>64%</h5>
                <aside>
                  <AreaChart1 />
                </aside>
              </div>

              <div className="sub-sec-beside-chart">
                <p>Agents</p>
                <h5>86%</h5>
                <aside>
                  <AreaChart2 />
                </aside>
              </div>

              <div className="sub-sec-beside-chart">
                <p>Agent Managers</p>
                <h5>+34%</h5>
                <aside>
                  <AreaChart3 />
                </aside>
              </div>

              <div className="sub-sec-beside-chart">
                <p>Active Terminals</p>
                <div>
                  <h5>2,734</h5>
                  <p className="m-0">/5,783</p>
                </div>
              </div>

              <div className="sub-sec-beside-chart">
                <p>Active Agents</p>
                <div>
                  <h5>1,734</h5>
                  <p className="m-0">/4,321</p>
                </div>
              </div>

              <div className="sub-sec-beside-chart">
                <p>Active Agent Managers</p>
                <div>
                  <h5>273</h5>
                  <p className="m-0">/1,123</p>
                </div>
              </div>

              <div className="sub-sec-beside-chart">
                <p>Active Transactions</p>
                <div>
                  <h5>501</h5>
                  <p className="m-0">/Mins.</p>
                </div>
              </div>
              <div className="sub-sec-beside-chart">
                <p>Active Locations</p>
                <div>
                  <h5>90</h5>
                  <p className="m-0">/150</p>
                </div>
              </div>
              <div className="sub-sec-beside-chart">
                <p>Av. Session Length</p>
                <div>
                  <h5>2m 34s</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="PieAndMedia-section ms-1 my-2 d-flex justify-content-between">
            <div className="pie-section">
              <div className="nav-pie-section">
                <p>Satistics</p>
                <div>
                  <small className="pe-4">Last Week</small>
                  <span>
                    <ColumnSorting />
                  </span>
                </div>
              </div>
              <div className="body-pie-section">
                <div>
                  <PieCharts />
                </div>
                <div className="sub-body-pie-section">
                  <div>
                    <small style={{ background: "#1b59f8", color: "#1b59f8" }}>
                      .
                    </small>
                    <span>AGENT MANAGEMENTS</span>
                  </div>
                  <div>
                    <small style={{ background: "#ffb673", color: "#ffb673" }}>
                      .
                    </small>
                    <span>TERMINALS</span>
                  </div>
                  <div>
                    <small style={{ background: "#42cc7e", color: "#42cc7e" }}>
                      .
                    </small>
                    <span>AGENTS</span>
                  </div>
                </div>
              </div>
              <div className="footer-pie-section text-end">
                <div>View All</div>
              </div>
            </div>

            <div className="pie-section">
              <div className="nav-pie-section">
                <p>Agent Loaderboard</p>
                <div>
                  <small className="pe-4">Last Week</small>
                  <span>
                    <ColumnSorting />
                    {/* <TbSelector /> */}
                  </span>
                </div>
              </div>
              <div className="body-pie-section">
                <div>
                  <Radial />
                </div>
                <div className="sub-body-pie-section">
                  <div>
                    <small style={{ background: "#1b59f8", color: "#1b59f8" }}>
                      .
                    </small>
                    <span>JayTech Venture</span>
                  </div>
                  <div>
                    <small style={{ background: "#ffb673", color: "#ffb673" }}>
                      .
                    </small>
                    <span>ABC Limited</span>
                  </div>
                  <div>
                    <small style={{ background: "#42cc7e", color: "#42cc7e" }}>
                      .
                    </small>
                    <span>TM30 Global</span>
                  </div>
                  <div>
                    <small style={{ background: "#d1d2d2", color: "#d1d2d2" }}>
                      .
                    </small>
                    <span>Glamitom International</span>
                  </div>
                </div>
              </div>
              <div className="footer-pie-section text-end">
                <div>
                  View Full Report{" "}
                  <span className="fs-5 ps-2">
                    {" "}
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer mt-3">
            <div className="nav-footer">
              <h6>Recent Transactions</h6>
              <div>
                View All Transactions <AiOutlineRight />
              </div>
            </div>
            <Table
              columns={columns}
              DashBoardData={formattedData}
              color={"DashBoardData"}
            />

            {/* <div className="foot-footer bg-white">
              <p>
                Showing {firstSlice} to {secondSlice} of {dataLength} entries
              </p>
              <div className="sub-foot-footer">
                <button
                  className="previous1"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <div>
                    <BsArrowLeft />
                  </div>
                  <span>Previous</span>
                </button>
                <button className="footbtn2">{currentPage}</button>
                <button
                  className="next1"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <span>Next</span>
                  <div>
                    <BsArrowRight />
                  </div>
                </button>
              </div>
            </div> */}
            {/* <Pagination /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
