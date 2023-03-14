import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaTimes } from "react-icons/fa";
import "./table.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "../components/Modal";
import ViewPics from "./pics/Group 1389.png";
import { useNavigate } from "react-router-dom";

import FeaturedIcon2 from "../picture/FeaturedIcon2.png";
import FeaturedIcon from "../picture/Featured icon.png";
import Footer from "./Footer";
import StatusToggle from "../RE-USEABLE-COMPONENT/StatusToggle";
import TableSuccess from "../RE-USEABLE-COMPONENT/TableSuccess";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
// import { Label } from "recharts";
import Selector from "../Libary/Select";
import { BsArrowRight } from "react-icons/bs";

function Table({
  data,
  AgentManagerData,
  AgentData,
  TerminalData,
  DashBoardData,
  ProviderData,
  RentalData,
  StaffData,
  Disputess,
  columns,
  init,
  color,
  type,
  userAgentDetails,
  userAgentDetails1,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // const [isOpen1, setIsOpen1] = useState(false);

  // const [isOpenChild, setIsOpenChild] = useState(false);
  const [isOpenChild1, setIsOpenChild1] = useState(false);

  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [createSection, setCreateSection] = useState(false);
  const [pignation, setpignation] = useState(1);
  const [allAgent, setAllAgent] = useState([]);
  const [agents, setAgents] = useState([]);
  const [rental, setRental] = useState([]);

  const navigate = useNavigate();

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: `bearer ${userDetails?.data?.token}`,
    },
  };
  // console.log(userDetails?.data?.token);

  const fetchManagers = async () => {
    await axios
      .get(`${process.env.REACT_APP_HTTP_ROUTER}/user/agentmanagers`, config)
      .then((res) => {
        setAllAgent(res.data.agentManger);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAgents = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/agents/all/?page=${pignation}`,
        config
      )
      .then((res) => {
        setAgents(res.data.data.getallagents);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchRental = async () => {
    await axios
      .get(`${process.env.REACT_APP_HTTP_ROUTER}/rental/all`, config)
      .then((res) => {
        setRental(res.data.allRentalAgent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 300 });
    fetchManagers();
    fetchAgents();
    fetchRental();
  }, [pignation]);
  return (
    <>
      {color === "agent" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((datum, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}

                    // onClick={() => navigate("/Agent-Management/Agents/each-agent");}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum?.Agent_name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum?.Agent_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum?.Phone_Number}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum?.Business_Name}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum?.Email_Address}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum?.State}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum?.Status === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />
        </div>
      )}

      {color === "agentManagerData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {allAgent?.map((datum1, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      userAgentDetails(datum1?._id);
                      localStorage.setItem(
                        "managerId",
                        JSON.stringify(datum1?._id)
                      );
                      navigate("/Agent-Management/each-agent");
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.user?.name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.user?._id}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.phonenumber}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.business_name}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.user?.email}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.state}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.user?.status === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                    {/* </Link> */}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />
        </div>
      )}

      {color === "AgentData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {agents?.map((datum1, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      userAgentDetails1(datum1?._id);
                      localStorage.setItem(
                        "agentId",
                        JSON.stringify(datum1?._id)
                      );
                      console.log(datum1?._id);
                      navigate("/Agent-Management/each-agent");
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.fullname}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?._id}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.phonenumber}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.business_name}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.email}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.state}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.status === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer
            pignation={pignation}
            setpignation={setpignation}
            pageNumber={pignation}
            onClickNext={() => {
              setpignation(pignation + 1);
            }}
          />
        </div>
      )}

      {color === "terminalData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TerminalData?.map((Terminal, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Terminal?.ASSIGNED_AGENT}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Terminal?.TERMINAL_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Terminal?.Terminal_Location}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Terminal?.TERMINAL_MANUFACTURE}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Terminal?.TERMINAL_SERIAL_NUMBER}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Terminal?.TRANSACTION_LIMIT}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Terminal?.Status === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Footer />
        </div>
      )}

      {color === "DashBoardData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#9B9B9B",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {DashBoardData?.map((Dashboards, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Agent_name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Dashboards?.Agent_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Dashboards?.Response_Message}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Dashboards?.resp_code}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Trans_type === "Withdrawal" ? (
                        <div style={{ color: "#01b001" }}>Withdrawal</div>
                      ) : (
                        <div style={{ color: "#ff5b64" }}>Deposit</div>
                      )}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Amount}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Earning}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Date}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Status === "SUCESSFUL" ? (
                        <TableSuccess type="active" text="SUCESSFUL" />
                      ) : (
                        <TableSuccess
                          className="px-4"
                          type="in-active"
                          text="FAILED"
                        />
                      )}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Dashboards?.Trans_ref}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />
        </div>
      )}

      {color === "ProviderData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#9B9B9B",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {ProviderData?.map((Provider, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Provider?.Service_name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Provider?.Category}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Provider?.Price}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      <div>
                        <button
                          style={{
                            padding: ".3rem 0",
                            fontWeight: "600",
                            borderRadius: ".4rem",
                            width: "50%",
                            border: "none",
                            background: "#dbe5ff",
                            color: "#1b59f8",
                          }}
                          onClick={() => setIsOpen(true)}
                        >
                          {Provider?.Provider}
                        </button>
                        <Modal open={isOpen} type="ProviderData">
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
                                  style={{
                                    border: "none",
                                    background: "white",
                                  }}
                                >
                                  X
                                </button>
                              </h4>

                              <div className="add-new-terminal-input ">
                                <div className="add-new-terminal mb-3">
                                  <div className="add-new-terminal-input1 ">
                                    <label
                                      htmlFor="PrimaryProvider"
                                      style={label}
                                    >
                                      Primary Provider{" "}
                                      <span style={sup}>*</span>
                                    </label>
                                    <Selector
                                      id="PrimaryProvider"
                                      placeholder="Select your default provider"
                                    />
                                  </div>
                                  <div className="add-new-terminal-input1">
                                    <label
                                      style={label}
                                      htmlFor="secondaryprovider"
                                    >
                                      Secondary Provider (optional)
                                    </label>

                                    <Selector
                                      id="secondaryprovider"
                                      placeholder="Select your secondary provider"
                                    />
                                  </div>
                                </div>

                                <div className="add-new-terminal ">
                                  <div className="add-new-terminal-input1 ">
                                    <label style={label} htmlFor="ServiceName">
                                      Service ID (For Primary Provider)
                                      <span style={sup}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      id="ServiceName"
                                      placeholder="Enter Service Name"
                                    />
                                  </div>
                                  <div className="add-new-terminal-input1 ">
                                    <label style={label} htmlFor="ServiceID">
                                      Service ID (For Secondary Provider)
                                      <span style={sup}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      id="ServiceID"
                                      placeholder="Enter Service ID"
                                    />
                                  </div>
                                </div>

                                <div className="add-new-terminal ">
                                  <div className="add-new-terminal-input11  q">
                                    <button
                                      onClick={() => {
                                        setIsOpen(false);
                                        setIsOpenChild1(true);
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

                        <Modal open={isOpenChild1}>
                          <StyledModalBackground
                            onClick={() => {
                              setIsOpenChild1(false);
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
                                <p>
                                  Your Card Details has been successfully Added.
                                </p>
                              </div>
                            </StyledModalContent>
                          </StyledModalBackground>
                        </Modal>
                      </div>
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Provider?.Status === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />
        </div>
      )}

      {color === "RentalData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#9B9B9B",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rental?.map((RentalData, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.fullname}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.email}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.phonenumber}
                    </td>

                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.region}
                    </td>

                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.state}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Status === "SUCESSFUL" ? (
                        <TableSuccess type="active" text="ACTIVE" />
                      ) : (
                        <TableSuccess type="in-active" text="INACTIVE" />
                      )}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Flag_Unflag === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Exempt_agent === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>

                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          fontWeight: "500",
                          fontSize: ".7rem",
                          color: "#1b59f8",
                          backgroundColor: "#e6edfe",
                          padding: ".1rem .5rem",
                          borderRadius: ".3rem",
                        }}
                        onClick={() => setCreateSection(true)}
                      >
                        {RentalData?.Grant_sucession}
                      </button>

                      <Modal open={createSection}>
                        <StyledModalBackground>
                          <StyledModalContent
                            data-aos="slide-down"
                            padding="1rem"
                            width="26%"
                          >
                            <div className=" ">
                              <div className="d-flex justify-content-between">
                                <h5>Card Added</h5>
                                <button
                                  style={{
                                    background: "transparent",
                                    border: "none",
                                  }}
                                  onClick={() => {
                                    setCreateSection(false);
                                  }}
                                >
                                  <FaTimes />
                                </button>
                              </div>
                            </div>

                            <div className="modal-content-card-added pt-2">
                              <label
                                htmlFor="setcon"
                                className=""
                                style={{ fontSize: ".9rem" }}
                              >
                                Enter New Amount (Concession)
                              </label>
                              <div>
                                <input
                                  type="text"
                                  id="setcon"
                                  placeholder="Enter Amount"
                                  className="w-100 p-3 my-3"
                                  style={{
                                    outline: "none",
                                    borderRadius: ".4rem",
                                    border: "1px solid grey",
                                  }}
                                />
                              </div>
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
                                  setCreateSection(false);
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
                                  setCreateSection(false);
                                  setCardAdded(true);
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
                          </StyledModalContent>
                        </StyledModalBackground>
                      </Modal>
                      <Modal open={cardAdded}>
                        <StyledModalBackground>
                          <StyledModalContent
                            data-aos="slide-down"
                            padding="1rem"
                            width="27%"
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

                            <div className="modal-content-card-added pt-2">
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
                            data-aos="slide-down"
                            padding="1rem"
                            width="27%"
                          >
                            <div className="modal-content-n mb-3">
                              <div>
                                <img src={FeaturedIcon} alt="" />
                              </div>
                            </div>

                            <div className="modal-content-card-added">
                              <h4>Card Added</h4>
                              <p>
                                Your Card Details has been successfully Added.
                              </p>
                            </div>
                          </StyledModalContent>
                        </StyledModalBackground>
                      </Modal>
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Place_lien === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />
        </div>
      )}

      {color === "StaffData" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {StaffData?.map((StaffData, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {StaffData?.AGENT_NAME}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {StaffData?.AGENT_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {StaffData?.PHONE_NUMBER}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {StaffData?.EMAIL_ADRESSABLE}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {StaffData?.Status === true ? (
                        <StatusToggle type="active" />
                      ) : (
                        <StatusToggle type="in-active" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />
        </div>
      )}

      {color === "Disputess" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  height: "40px",
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="fd">
                      <div className="header1">
                        <span className="header1-1">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Disputess?.map((Disputess, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.72rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Disputess?.AGENT_NAME}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Disputess?.AGENT_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Disputess?.PHONE_NUMBER}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Disputess?.AGENTS_BUSINESS_NAME}
                    </td>

                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Disputess?.AGENTS_BUSINESS_ADDRESS}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {Disputess?.TRANSACTION_DISPUTE_CONTENT.slice(0, 28)}...
                    </td>

                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      <button
                        style={{
                          color: "#1b59f8",
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => setIsOpen(true)}
                      >
                        {Disputess?.ACTION}
                      </button>

                      <Modal open={isOpen}>
                        <StyledModalBackground>
                          <StyledModalContent
                            data-aos="slide-down"
                            padding="1rem"
                            width="40%"
                          >
                            <h4 className="add-new-terminal-sub1  d-flex justify-content-between px-4">
                              <div className="text-center w-100">
                                <p style={{ width: "100%" }}>
                                  <img src={ViewPics} alt="" />
                                </p>
                              </div>

                              <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                  border: "none",
                                  background: "white",
                                  marginBottom: "3rem",
                                }}
                              >
                                X
                              </button>
                            </h4>

                            <div className="add-new-terminal-input ">
                              <div
                                className=" "
                                style={{ textAlign: "center" }}
                              >
                                <h6>
                                  Account 1234567890 Tope Aloa was Debited
                                </h6>

                                <p
                                  style={{
                                    fontSize: ".9rem",
                                    color: "rgba(0,0,0,0.6",
                                    padding: "15px",
                                  }}
                                >
                                  Good Morning, my account 1234567890 Tope Aloa
                                  was debited with #2000 on POS machine on
                                  4/02/2023 for a decimal transaction. <br />
                                  And up to this moment i am yet to get a
                                  reversal. Kindly help the complaint. My
                                  details first 6 digits of my ATM card: 501602,
                                  last 4 digits of my ATM card: 1234. Thanks
                                </p>
                              </div>
                            </div>
                          </StyledModalContent>
                        </StyledModalBackground>
                      </Modal>
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Disputess?.RESOLVED_STATUS === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: ".7rem",
                            background: "#E6FEE6",
                            border: "none",
                            width: "90%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          SUCESSFUL
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "#FFAA5B",
                            fontSize: ".7rem",
                            display: "flex",
                            justifyContent: "center",
                            width: "90%",
                            borderRadius: ".3rem",
                            background: "#ffdec0",
                            border: "none",
                          }}
                        >
                          PENDING
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Footer />

          {/* <div className="foot-footer bg-white">
            <p>Showing 1 to 5 of 100 entries</p>
            <div className="sub-foot-footer">
              <div className="previous">
                <AiOutlineLeft />
                Previous
              </div>
              <div className="n1">1</div>
              <div className="n2">2</div>
              <div className="n2">3</div>
              <div className="n2">4</div>
              <div className="n2">...</div>
              <div className="n2">10</div>
              <div className="next">
                Next <AiOutlineRight />
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}

export default Table;

const sup = {
  color: "red",
  paddingLeft: ".3rem",
  fontSize: "1rem",
};
const label = {
  color: "rgba(0,0,0,0.7)",
  fontSize: ".9rem",
  fontWeight: "645",
  paddingBottom: ".6rem",
};
