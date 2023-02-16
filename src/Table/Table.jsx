import React, { useState, useEffect } from "react";

import { FaToggleOff, FaToggleOn, FaTimes } from "react-icons/fa";
import "./table.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "../components/Modal";
import ViewPics from "./pics/Group 1389.png";
import { useNavigate } from "react-router-dom";

import FeaturedIcon2 from "../picture/FeaturedIcon2.png";
import FeaturedIcon from "../picture/Featured icon.png";
import Footer from "./Footer";

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
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const [isOpenChild, setIsOpenChild] = useState(false);
  const [isOpenChild1, setIsOpenChild1] = useState(false);

  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [createSection, setCreateSection] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
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
                      fontSize: "0.65rem",
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
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
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
              {AgentManagerData?.map((datum1, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.65rem",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onClick={(id) => {
                      userAgentDetails(id);
                      navigate("/Agent-Management/Agents/each-agent");
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.Agent_name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.Agent_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.Phone_Number}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.Business_Name}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.Email_Address}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.State}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.Status === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
                        </button>
                      )}
                    </td>
                    {/* </Link> */}
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
              {AgentData?.map((datum1, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.65rem",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/Agent-Management/Agents/each-agent");
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.Agent_name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.Agent_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.Phone_Number}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {datum1?.Business_Name}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.Email_Address}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.State}
                    </td>
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {datum1?.Status === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
                        </button>
                      )}
                    </td>
                    {/* </Link> */}
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
                      fontSize: "0.65rem",
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
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
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
                      fontSize: "0.65rem",
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
                        <button
                          style={{
                            color: "#0e880e",
                            // display: "flex",
                            textAlign: "center",
                            fontWeight: "600",
                            background: "#e6fee6",
                            border: "none",
                            borderRadius: "3px",
                            width: "100%",
                          }}
                        >
                          SUCESSFUL
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "#ff5b64",
                            // display: "flex",
                            textAlign: "center",
                            background: "#ffeced",
                            border: "none",
                            fontWeight: "600",
                            width: "100%",
                            borderRadius: "3px",
                          }}
                        >
                          FAILED
                        </button>
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

          {/* <Footer /> */}

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
                      fontSize: "0.65rem",
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
                      {Provider?.Provider === "VIEW PROVIDER" ? (
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
                            VIEW PROVIDER
                          </button>
                          <Modal open={isOpen} type="ProviderData">
                            <div
                              className="overlay"
                              // onClick={() => {
                              //   setIsOpen(false);
                              //   // setIsDropped(!isDropped);
                              // }}
                            >
                              <div
                                data-aos="slide-down"
                                className="container bg-white mt-3"
                                style={{
                                  padding: "2rem 4rem",
                                  borderRadius: ".4rem",
                                }}
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
                                  <div className="add-new-terminal ">
                                    <div className="add-new-terminal-input1 ">
                                      <label htmlFor="ServiceName">
                                        Service Name
                                      </label>
                                      <input
                                        type="text"
                                        id="ServiceName"
                                        placeholder="Enter Service Name"
                                      />
                                    </div>
                                    <div className="add-new-terminal-input1 ">
                                      <label htmlFor="ServiceID">
                                        Service ID
                                      </label>
                                      <input
                                        type="text"
                                        id="ServiceID"
                                        placeholder="Enter Service ID"
                                      />
                                    </div>
                                  </div>

                                  <div className="add-new-terminal ">
                                    <div className="add-new-terminal-input11 ">
                                      <label htmlFor="ServicePrice">
                                        Pricing
                                      </label>
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
                              </div>
                            </div>
                          </Modal>

                          <Modal open={isOpenChild1}>
                            <div className="overlay">
                              <div
                                className="container bg-white mt-3"
                                style={{
                                  padding: "2rem 4rem",
                                  borderRadius: ".4rem",
                                }}
                                data-aos="slide-down"
                              >
                                <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                                  <p>Add New Service</p>

                                  <button
                                    onClick={() => setIsOpenChild1(false)}
                                    style={{
                                      border: "none",
                                      background: "white",
                                    }}
                                  >
                                    X
                                  </button>
                                </h4>

                                <div>
                                  <div className="add-new-terminal ">
                                    <div className="add-new-terminal-input11  q">
                                      <button
                                        onClick={() => setIsOpenChild1(false)}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      ) : (
                        <div>
                          <button
                            style={{
                              borderRadius: ".4rem",
                              padding: ".3rem 0",
                              fontWeight: "600",
                              width: "50%",
                              border: "none",
                              background: "#ffe6ce",
                              color: "#ffa756",
                            }}
                            onClick={() => setIsOpen1(true)}
                          >
                            SELECT PROVIDER
                          </button>

                          <Modal open={isOpen1}>
                            <div className="overlay">
                              <div
                                className="container bg-white mt-3"
                                style={{
                                  padding: "2rem 4rem",
                                  borderRadius: ".4rem",
                                }}
                                data-aos="slide-down"
                              >
                                <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                                  <p>Add New Service</p>

                                  <button
                                    onClick={() => setIsOpen1(false)}
                                    style={{
                                      border: "none",
                                      background: "white",
                                    }}
                                  >
                                    X
                                  </button>
                                </h4>

                                <div className="add-new-terminal-input ">
                                  <div className="add-new-terminal ">
                                    <div className="add-new-terminal-input1 ">
                                      <label htmlFor="ServiceName">
                                        Service Name
                                      </label>
                                      <input
                                        type="text"
                                        id="ServiceName"
                                        placeholder="Enter Service Name"
                                      />
                                    </div>
                                    <div className="add-new-terminal-input1 ">
                                      <label htmlFor="ServiceID">
                                        Service ID
                                      </label>
                                      <input
                                        type="text"
                                        id="ServiceID"
                                        placeholder="Enter Service ID"
                                      />
                                    </div>
                                  </div>

                                  <div className="add-new-terminal ">
                                    <div className="add-new-terminal-input11 ">
                                      <label htmlFor="ServicePrice">
                                        Pricing
                                      </label>
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
                                    <div className="add-new-terminal-input11  q">
                                      <button
                                        onClick={() => {
                                          setIsOpenChild(true);
                                          setIsOpen1(false);
                                        }}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                          <Modal open={isOpenChild}>
                            <div className="overlay">
                              <div
                                className="container bg-white mt-3"
                                style={{
                                  padding: "2rem 4rem",
                                  borderRadius: ".4rem",
                                }}
                                data-aos="slide-down"
                              >
                                <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                                  <p>Add New Service</p>

                                  <button
                                    onClick={() => setIsOpenChild(false)}
                                    style={{
                                      border: "none",
                                      background: "white",
                                    }}
                                  >
                                    X
                                  </button>
                                </h4>

                                <div>
                                  <div className="add-new-terminal ">
                                    <div className="add-new-terminal-input11  q">
                                      <button
                                        onClick={() => setIsOpenChild(false)}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      )}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {Provider?.Status === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
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
              {RentalData?.map((RentalData, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                      fontSize: "0.65rem",
                      fontWeight: "500",
                    }}
                  >
                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Assigned_Agent}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.Terminal_ID}
                    </td>
                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.Terminal_Location}
                    </td>

                    <td
                      style={{
                        paddingLeft: "1rem",
                        height: "40px",
                      }}
                    >
                      {RentalData?.resp_code}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Status === "SUCESSFUL" ? (
                        <button
                          style={{
                            color: "#0e880e",
                            textAlign: "center",
                            fontWeight: "600",
                            background: "#e6fee6",
                            border: "none",
                            borderRadius: "3px",
                            width: "100%",
                          }}
                        >
                          SUCESSFUL
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "#ff5b64",
                            textAlign: "center",
                            background: "#ffeced",
                            border: "none",
                            fontWeight: "600",
                            width: "100%",
                            borderRadius: "3px",
                          }}
                        >
                          FAILED
                        </button>
                      )}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Flag_Unflag === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
                        </button>
                      )}
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Exempt_agent === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
                        </button>
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
                        <div className="overlay">
                          <div
                            className="container bg-white text-dark"
                            style={{
                              padding: "1rem",
                              borderRadius: ".4rem",
                              width: "30%",
                              marginTop: "10rem",
                            }}
                            data-aos="slide-down"
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

                            <div className="modal-content-card-added">
                              <h4>Card Added</h4>
                              <p>
                                Your Card Details has been successfully Added.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </td>

                    <td
                      style={{
                        height: "40px",
                        paddingLeft: "1rem",
                      }}
                    >
                      {RentalData?.Place_lien === true ? (
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
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
                      fontSize: "0.65rem",
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
                        <button
                          style={{
                            color: "green",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOn />
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "grey",
                            fontSize: "1.2rem",
                            display: "flex",
                            background: "none",
                            border: "none",
                          }}
                        >
                          <FaToggleOff />
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
                      fontSize: "0.65rem",
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
                        <div
                          className="overlay d-flex justify-content-center align-items-center flex-direction-column"
                          // onClick={() => {
                          //   setIsOpen(false);
                          //   // setIsDropped(!isDropped);
                          // }}
                        >
                          <div
                            className="modal.shii bg-white w-50"
                            style={{
                              padding: "2rem 4rem",
                              borderRadius: ".4rem",
                              height: "fit-content",
                            }}
                            data-aos="slide-down"
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
                          </div>
                        </div>
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
