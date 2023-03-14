import "../index.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Table from "../Table/Table";
import axios from "axios";

//pictures
import FeaturedIcon from "../picture/Featured icon.png";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import Selector from "../Libary/Select";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";
import ButtonLoader from "../RE-USEABLE-COMPONENT/ButtonLoader";

const Agents = ({ agents, userAgentDetails1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [agentd, setagentd] = useState("");

  const [agentInput, setAgentInput] = useState({
    fullname: "",
    phonenumber: "",
    address: "",
    email: "",
    business_name: "",
    localgovt: "",
    state: "",
    region: "",
    agentrental_type: "",
  });

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

  const selectOption = [
    { value: "everydaypay", label: "Every day Pay" },
    { value: "fullydaypaid", label: "Fully Day Paid" },
  ];
  let userDetail = JSON.parse(localStorage.getItem("userDetails"));

  const configAgent = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${userDetail?.data?.token}`,
    },
  };

  const FetchAgentid = () => {
    axios
      .get(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/agents/all?id=${userId}`,
        configAgent
      )
      .then((response) => {
        setagentd(response?.data);
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAgentInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitAgent = async (e) => {
    e.preventDefault();
    setLoading(true);

    const AddNewAgent = await axios
      .post(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/onboard/agent`,
        agentInput,
        configAgent
      )
      .then((response) => {
        if (response?.data?.status === true) {
          // throw new Error("something went wrong ");
          loading(false);
          setCardAdded2(true);
          setIsOpen(false);
          setTimeout(() => {
            window.location.assign("/agent-Management/agents");
          }, 2000);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        toast.error(`${e.response.data.errors[0].msg}`);
      });
  };

  useEffect(() => {
    FetchAgentid();
    Aos.init({ duration: 300 });
  }, []);

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar text="Agent Management" />
        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6>Agents</h6>
              <div
                className="d-flex justify-content-between"
                style={{ width: "65%" }}
              >
                <div
                  className="input-top-nav d-flex align-items-center"
                  style={{ background: "#f8faff", border: "1px solid #00b3fe" }}
                >
                  <div style={{ color: "#868fa0" }}>
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Terminal ID, Agent or Agent managers"
                    style={{ background: "#f8faff" }}
                  />
                </div>

                <button
                  className="main-account-aside3-btn1 "
                  onClick={() => setIsOpen(true)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="pe-2 m-0">
                    <AiOutlinePlus />
                  </div>{" "}
                  Add New Agent
                </button>

                <Modal open={isOpen}>
                  <StyledModalBackground>
                    <StyledModalContent
                      width="75%"
                      padding="1.5rem 4rem"
                      data-aos="slide-down"
                    >
                      <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                        <h4 style={{ color: "black" }}>Add New Agents</h4>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          <CancelBtn />
                        </button>
                      </div>

                      <form action="" onSubmit={submitAgent}>
                        <div className="modal-content-payment-method">
                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Agent`s Full Name"
                                type="require"
                                htmlFor="AgentFullName"
                              />
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter Your Business Name"
                                  id="AgentFullName"
                                  name="fullname"
                                  value={agentInput.fullname}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Phone Number (Must be attached to your BVN)"
                                type="require"
                                htmlFor="PhoneNumber"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder="Enter your Phone Number linked to your BVN"
                                  id="PhoneNumber"
                                  name="phonenumber"
                                  value={agentInput.phonenumber}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Business Name"
                                type="require"
                                htmlFor="BusinessName"
                              />
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter Your Business Name"
                                  id="BusinessName"
                                  name="business_name"
                                  value={agentInput.business_name}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Business Address"
                                type="require"
                                htmlFor="BusinessAddress"
                              />
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter Your Business Address"
                                  id="BusinessAddress"
                                  name="address"
                                  value={agentInput.address}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Local Government Area"
                                type="require"
                                htmlFor="LocalGovernmentArea"
                              />
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter your Local Government Area"
                                  id="LocalGovernmentArea"
                                  name="localgovt"
                                  value={agentInput.localgovt}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="State"
                                type="require"
                                htmlFor="agentState"
                              />
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter your State"
                                  id="agentState"
                                  name="state"
                                  value={agentInput.state}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Region"
                                type="require"
                                htmlFor="region"
                              />
                              <div>
                                <input
                                  type="text"
                                  placeholder="Region"
                                  id="region"
                                  name="region"
                                  value={agentInput.region}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Agent Type"
                                type="require"
                                htmlFor="agentrental_type"
                              />
                              <div>
                                <Selector
                                  selected={(e) =>
                                    setAgentInput((prev) => {
                                      return {
                                        ...prev,
                                        agentrental_type: e.value,
                                      };
                                    })
                                  }
                                  value={agentInput.agentrental_type}
                                  data={selectOption}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent">
                              <Label
                                text="Email Address"
                                type="require"
                                htmlFor="email"
                              />
                              <div>
                                <input
                                  type="email"
                                  placeholder="Enter your Email address"
                                  id="email"
                                  name="email"
                                  value={agentInput.email}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent">
                              <label
                                htmlFor=""
                                style={{ color: "white", paddingTop: "10px" }}
                              >
                                .
                              </label>
                              <div>
                                <button
                                  type="submit"
                                  className=""
                                  // onClick={() => {
                                  //   setCardAdded2(true);
                                  //   setIsOpen(false);
                                  // }}
                                >
                                  {loading ? (
                                    <ButtonLoader text="Loading..." />
                                  ) : (
                                    "Submit"
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <ToastContainer
                        position="top-center"
                        autoClose={900}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
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
                      width="27%"
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
            <div className="nav-footer2 d-flex align-items-center py-2 px-4 bg-white">
              <Link to="/agent-management">
                <button className="h me-3">Agent Managers</button>
              </Link>
              <button>Agents</button>
            </div>
            <div className="footer">
              <Table
                columns={columns}
                agents={agents}
                color={"AgentData"}
                userAgentDetails1={(id) => setUserId(id)}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agents;
