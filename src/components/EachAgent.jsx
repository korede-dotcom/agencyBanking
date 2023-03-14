import React, { useState, useEffect } from "react";

import "../index.css";
import "./eachagent.css";
import "./modal.css";
import SideNavbar from "./SideNavbar";
import axios from "axios";

import { AiOutlineDown } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { RiArrowUpSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";

//pictures
import BlueChart from "../picture/Vector.png";
import RedChart from "../picture/Vector (1).png";
import FeaturedIcon from "../picture/Featured icon.png";
import FeaturedIcon2 from "../picture/FeaturedIcon2.png";
import Modal from "./Modal";
import ToggleBtn from "../RE-USEABLE-COMPONENT/ToggleBtn";
import {
  StyledModalBackground,
  StyledModalContent,
  StyledSubmit,
} from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";
import Selector from "../Libary/Select";

const EachAgent = ({ userAgentDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [timeFrames2, setTimeFrames2] = useState(
    localStorage.getItem("timeFrames2") || "All"
  );
  const [DailyLimit, setDailyLimit] = useState(0);
  const [DailySending, setDailySending] = useState(0);

  const [daily, setDaily] = useState(false);
  const [CurrencySymbol, setCurrencySymbol] = useState();
  const handlePercentage = (e) => {
    // setTransaction(e.target.value);
  };
  const [readyonly, setReadyonly] = useState(true);
  const [allAgent, setAllAgent] = useState("");
  const [setCommission, setSetCommission] = useState({
    setCommission: "Set New Limit",
    saveCommission: "Save New Limit",
  });

  const [eachManager, setEachManager] = useState({
    wallet: 0,
    commission: 0,
    CurrencySymbol: "",
  });

  const handleEdit = () => {
    setReadyonly(false);
  };

  const handleDone = () => {
    setReadyonly(true);
  };
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: `bearer ${userDetails?.data?.token}`,
    },
  };
  const manager_id = JSON.parse(localStorage?.getItem("managerId"));
  const agent_id = JSON.parse(localStorage?.getItem("agentId"));
  // console.log(agent_id);

  // console.log(manager_id);
  const fetchManagers = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/manager/details?id=${manager_id}`,
        config
      )
      .then((res) => {
        // console.log(res.data);
        setAllAgent(res.data.manager);
        setEachManager({
          wallet: res?.data?.data?.balance?.wallet,
          commission: res?.data?.data?.balance?.commission,
          CurrencySymbol: res.data?.data?.currency?.symbol,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(allAgent);
  };

  const fetchAgentss = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/agents/details?id=${agent_id}`,
        config
      )
      .then((res) => {
        console.log(res.data);
        setAllAgent(res.data.agent);
        setEachManager({
          wallet: res?.data?.data?.balance?.wallet,
          commission: res?.data?.data?.balance?.commission,
          CurrencySymbol: res.data?.data?.currency?.symbol,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(allAgent);
  };

  let timeFrameModal2 = [
    { name: "Alphabetically", value: "Alphabetically", id: 1 },
    { name: "Most Used Services", value: "Most Used Services", id: 2 },
    { name: "Latest Services", value: "Latest Services", id: 3 },
    { name: "Rarely Used Services", value: "Rarely Used Services", id: 4 },
  ];

  useEffect(() => {
    Aos.init({ duration: 300 });
    localStorage.setItem("timeFrame2", timeFrames2);
    fetchManagers();
    fetchAgentss();
  }, []);

  const navigate = useNavigate();

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Dashboard"
          input="show"
          placeholder="Search Terminal ID, Agent and Agent Managers"
        />

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
                  <h4 className="pt-2">
                    {eachManager.CurrencySymbol} {eachManager.wallet}
                  </h4>
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
                  <h4 className="pt-2 ">
                    {eachManager.CurrencySymbol} {eachManager.commission}
                  </h4>
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

          <button
            className="btnLimit"
            onClick={() => {
              setDaily(true);
            }}
          >
            Set Transaction Limit
          </button>
          <Modal open={daily}>
            <StyledModalBackground>
              <StyledModalContent
                data-aos="slide-down"
                width="70%"
                padding="3rem"
              >
                <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                  <h4>Update Daily Transaction Limit</h4>
                  <button
                    onClick={() => {
                      setDaily(false);
                    }}
                  >
                    <span className="fs-4">
                      <FaTimes />
                    </span>
                  </button>
                </div>

                <div className="modal-content-payment-method">
                  <Label
                    text="Select Transaction Limit Type"
                    type="require"
                    htmlFor="LimitType"
                  />
                  <Selector
                    placeholder="Sending (Per Transaction)"
                    id="LimitType"
                    // data={options}
                    isSearch={true}
                    padding=".8rem 0"
                  />

                  <div className="modal-content-payment-method-input-div2">
                    <div className="sub-modal-content-payment-method-input-div2">
                      <Label
                        text="Present Transaction Limit"
                        type="normal"
                        htmlFor="amount"
                      />

                      <div style={billeridDiv}>
                        <div style={inputDivAll}>
                          {CurrencySymbol}
                          <input
                            type="number"
                            value={DailySending}
                            id="SetNewTransaction"
                            style={inputD}
                            readOnly
                            onChange={handlePercentage}
                          />
                        </div>
                      </div>
                    </div>

                    <div style={billerid}>
                      <Label
                        text="Set New Transaction Limit"
                        type="require"
                        htmlFor="SetNewTransaction"
                      />
                      <div style={billeridDiv}>
                        <div style={inputDivAll}>
                          {CurrencySymbol}
                          <input
                            type="number"
                            defaultValue={DailyLimit}
                            id="SetNewTransaction"
                            style={inputD}
                            readOnly={readyonly}
                            onChange={handlePercentage}
                          />
                        </div>

                        {readyonly ? (
                          <p
                            className="m-0"
                            style={edit}
                            onClick={() => {
                              handleEdit();
                            }}
                          >
                            {setCommission.setCommission}
                          </p>
                        ) : (
                          <p
                            className="m-0"
                            style={edit}
                            onClick={() => {
                              handleDone();
                            }}
                          >
                            {setCommission.saveCommission}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <StyledSubmit
                      done="done"
                      padding="1.05rem 0"
                      onClick={() => {
                        setDaily(false);
                        // setCardAdded1(true);
                      }}
                    >
                      Proceed
                    </StyledSubmit>
                  </div>
                </div>
              </StyledModalContent>
            </StyledModalBackground>
          </Modal>

          <section className="eachagent-myservice mt-3">
            <div className="eachagent-myservice-header ">
              <h5>My Service</h5>
              <section className="most-used-service">
                <button
                  className="myServiceBtn"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <div>Most Used Services</div>
                  <ColumnSorting />
                </button>
                <Modal open={Open}>
                  <div className="overlay">
                    <div className="conti">
                      <div className="d-flex forLine justify-content-between">
                        <div className=" timef">
                          <p className="m-0">Sort by: </p>
                          <div> {timeFrames2}</div>
                        </div>

                        <button
                          onClick={() => setOpen(false)}
                          className="upicon"
                        >
                          <RiArrowUpSFill />
                        </button>
                      </div>

                      <div className="timeframe-btn-div">
                        {timeFrameModal2.map((timeFrame) => {
                          return (
                            <div className="timeframe2-btn" key={timeFrame.id}>
                              <button
                                onClick={(e) =>
                                  setTimeFrames2(e.target.textContent)
                                }
                                style={{
                                  background: `${
                                    timeFrames2 === timeFrame.name
                                      ? "#f2f7ff"
                                      : ""
                                  }`,
                                  fontWeight: `${
                                    timeFrames2 === timeFrame.name ? "600" : ""
                                  }`,
                                }}
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
              </section>
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
                  <StyledModalBackground>
                    <StyledModalContent
                      data-aos="slide-down"
                      width="50%"
                      padding="3rem"
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
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>

                <Modal open={cardAdded}>
                  <StyledModalBackground>
                    <StyledModalContent
                      data-aos="slide-up"
                      width="26%"
                      padding="1rem"
                    >
                      <div className=" ">
                        <div className="d-flex justify-content-between">
                          <div>
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
                      width="24%"
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

const edit = {
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#1b59f8",
};

const inputDivAll = {
  display: "flex",
  alignItems: "center",
  width: "55%",
};

const inputD = {
  width: "100%",
  padding: "1.35rem 0",
  border: "none",
  outline: "none",
  color: "rgba(0,0,0,0.8)",
  fontSize: ".91rem",
};
const billerid = {
  width: "50%",
};
const billeridDiv = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1.5px solid #ccc",
  padding: "0 .8rem",
  borderRadius: ".4rem",
};
