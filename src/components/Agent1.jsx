import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import "../index.css";
import axios from "axios";

import { FaSearch, FaTimes } from "react-icons/fa";
import Table from "../Table/Table";
import { AiOutlinePlus } from "react-icons/ai";
import { ImUpload } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";

//pictures
import FeaturedIcon from "../picture/Featured icon.png";
import AgentManagerData from "../Table/AgentManagerData";
import Selector from "../Libary/Select";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";

function Agent1({ userAgentDetails }) {
  const [inputValue, setInputValue] = useState({
    name: "",
    business_name: "",
    localgovt: "",
    logo: "",
    govt_id: "",
    email: "",
    region: "",
    govt_id_type: "",
    phonenumber: "",
    address: "",
    state: "",
  });

  const [allState, setAllState] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [userId, setUserId] = useState("");
  const [manager, setManager] = useState("");
  const [uploadPicture, setUploadPicture] = useState({
    notUploaded: "Upload an Image",
    uploaded: "Image Uploaded",
  });

  console.log(userId);

  const selectOption = [
    { value: "bvn", label: "bvn" },
    { value: "nin", label: "nin" },
  ];

  let userDetail = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: `bearer ${userDetail?.data?.token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const FetchState = () => {
    axios
      .get(`${process.env.REACT_APP_HTTP_ROUTER}/auth/states`)
      .then((response) => {
        setAllState(response?.data?.data?.statelcd[0]);
        // console.log(response);
      });
  };

  // console.log(allState);

  const sortState = Object.keys(allState)?.map((d) => {
    const state = d;
    return {
      value: state,
      label: state,
    };
  });
  // console.log(Object.keys(allState));

  // const LGAOption = Object.keys(allState)?.find(
  //   (items) => items === inputValue.state
  // );
  // console.log(LGAOption);

  // const lga =

  // const lcd = allState.map((d) => d[0][inputValue.state]);
  // console.log(lcd);

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

  const userAgentDetail = (id) => {
    return id;
  };

  const submithandler1 = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name", inputValue.name);
    formData.append("address", inputValue.address);
    formData.append("business_name", inputValue.business_name);
    formData.append("logo", inputValue.logo);
    formData.append("govt_id", inputValue.govt_id);
    formData.append("govt_id_type", inputValue.govt_id_type);
    formData.append("phonenumber", inputValue.phonenumber);
    formData.append("localgovt", inputValue.localgovt);
    formData.append("state", inputValue.state);
    formData.append("region", inputValue.region);
    formData.append("email", inputValue.email);

    const AddAgentManager = await axios
      .post(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/onboard/agentmanager`,
        formData,
        config
      )

      .then((response) => {
        if (response.data.status) {
          setIsOpen(false);
          setCardAdded2(true);
          setTimeout(() => {
            console.log("This will run after 1 second!");
            window.location.reload();
          }, 2000);
          return () => clearTimeout();
        }
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const FetchManagerid = () => {
    axios
      .get(
        `${process.env.REACT_APP_HTTP_ROUTER}/user/manager/details?id=${userId}`,
        config
      )
      .then((response) => {
        setManager(response?.data);
      });
  };
  useEffect(() => {
    Aos.init({ duration: 500 });
    FetchState();
    FetchManagerid();
  }, [userId]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
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
                  placeholder="Search Agent name, Agent ID, Business name, e.t.c"
                  style={{ background: "#f8faff" }}
                />
              </div>

              <button
                className="main-account-aside3-btn1 text-center"
                onClick={() => setIsOpen(true)}
              >
                <span className="pe-2">
                  <AiOutlinePlus />
                </span>{" "}
                Add New Agent Management
              </button>
            </div>
          </div>
          <Modal open={isOpen}>
            <StyledModalBackground>
              <StyledModalContent
                width="86%"
                padding="3rem"
                data-aos="slide-down"
              >
                <form
                  action=""
                  onSubmit={submithandler1}
                  encType="multipart/form-data"
                >
                  <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                    <h4 style={{ color: "black" }}>Add New Agent Manager</h4>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <span className="fs-4">
                        <FaTimes />
                      </span>
                    </button>
                  </div>

                  <div className="modal-content-payment-method">
                    <div className="modal-content-add-agent">
                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Agent`s Full Name"
                          type="require"
                          htmlFor="AgentFullName"
                        />
                        <div>
                          <input
                            placeholder="Enter Your Full Name"
                            id="AgentFullName"
                            value={inputValue.name}
                            name="name"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Email"
                          type="require"
                          htmlFor="agentEmail"
                        />
                        <div>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            id="agentEmail"
                            value={inputValue.email}
                            name="email"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Phone Number (Must be attached to your BVN)"
                          type="require"
                          htmlFor="PhoneNumber"
                        />
                        <div>
                          <input
                            type="text"
                            placeholder="Enter your Phone Number"
                            id="PhoneNumber"
                            value={inputValue.phonenumber}
                            name="phonenumber"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="modal-content-add-agent">
                      <div className="sub-modal-content-add-agent2">
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
                            value={inputValue.business_name}
                            name="business_name"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <Label text="Region" type="require" htmlFor="region" />
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Your Business Name"
                            id="region"
                            value={inputValue.region}
                            name="region"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
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
                            value={inputValue.address}
                            name="address"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="modal-content-add-agent">
                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="State"
                          type="require"
                          htmlFor="agentState"
                        />
                        <div>
                          <Selector
                            placeholder="Select your State"
                            selected={(e) =>
                              setInputValue((prev) => {
                                return { ...prev, state: e.value };
                              })
                            }
                            value={inputValue.state}
                            sizeX={2}
                            padding=".7rem 0"
                            isSearch={true}
                            name="state"
                            data={sortState}
                            id="agentState"
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Local Government Area"
                          type="require"
                          htmlFor="LocalGovernmentArea"
                        />
                        <div>
                          <Selector
                            placeholder="Select your Local Government Area"
                            selected={(e) =>
                              setInputValue((prev) => {
                                return { ...prev, state: e.value };
                              })
                            }
                            value={inputValue.localgovt}
                            // sizeX={1}
                            isSearch={true}
                            name="localgovt"
                            padding=".7rem 0"
                            // data={LGAOption}
                            id="LocalGovernmentArea"
                          />
                          {/* <input
                            type="text"
                            placeholder="Enter your Local Government Area"
                            id="LocalGovernmentArea"
                            value={inputValue.localgovt}
                            name="localgovt"
                            onChange={handleOnChange}
                          /> */}
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Government Issued ID (BVN,NIN)"
                          type="require"
                          htmlFor="LocalGovernmentArea"
                        />
                        <div>
                          <input
                            type="text"
                            placeholder="Enter your Government Issued ID"
                            id="LocalGovernmentArea"
                            name="govt_id"
                            value={inputValue.govt_id}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="modal-content-add-agent">
                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Select and Upload an Image"
                          type="require"
                          htmlFor="image"
                        />
                        <div className="fileInput">
                          <span className="upload">
                            {" "}
                            <span className="pe-3 fs-5">
                              {inputValue.logo === "" ? (
                                <ImUpload />
                              ) : (
                                <GiCheckMark />
                              )}
                            </span>{" "}
                            {inputValue.logo === ""
                              ? uploadPicture.notUploaded
                              : uploadPicture.uploaded}
                          </span>
                          <input
                            type="file"
                            placeholder="Select and Upload an Image"
                            id="image"
                            name="logo"
                            onChange={(e) => {
                              setInputValue((prev) => {
                                return {
                                  ...prev,
                                  logo: e.target.files[0],
                                };
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <Label
                          text="Government ID type"
                          type="require"
                          htmlFor="govtIdType"
                        />

                        <div>
                          <Selector
                            selected={(e) =>
                              setInputValue((prev) => {
                                return { ...prev, govt_id_type: e.value };
                              })
                            }
                            value={inputValue.govt_id_type}
                            sizeX={1}
                            data={selectOption}
                            id="govtIdType"
                          />
                        </div>
                      </div>

                      <div className="sub-modal-content-add-agent2">
                        <div className="pt-4">
                          <button
                            type="submit"
                            onSubmit={submithandler1}
                            // onClick={() => {
                            //   setIsOpen(false);
                            //   setCardAdded2(true);
                            // }}
                            className=""
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="modal-content-add-agent"></div>
                  </div>
                </form>
              </StyledModalContent>
            </StyledModalBackground>
          </Modal>

          <Modal open={cardAdded2}>
            <StyledModalBackground
              onClick={() => {
                setCardAdded2(false);
              }}
            >
              <StyledModalContent padding="1rem" data-aos="zoom-up">
                <div className="modal-content-n mb-3">
                  <div>
                    <img src={FeaturedIcon} alt="" />
                  </div>
                </div>

                <div className="modal-content-card-added">
                  <h4>Card Added</h4>
                  <p>Your Card Details has been successfully Added.</p>
                </div>
              </StyledModalContent>
            </StyledModalBackground>
          </Modal>

          <div className="nav-footer2 d-flex align-items-center py-2 px-4 bg-white">
            <button>Agent Managers</button>
            <Link to="/agent-Management/agents">
              <button className="ms-4 h">Agents</button>
            </Link>
          </div>
          <div className="footer">
            <Table
              columns={columns}
              AgentManagerData={AgentManagerData}
              color={"agentManagerData"}
              userAgentDetails={(id) => setUserId(id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Agent1;
