import React, { useState, useEffect } from "react";
import axios from "axios";

import "../index.css";
import SideNavbar from "./SideNavbar";
// import { FaSearch } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
//pictures
import FeaturedIcon from "../picture/Featured icon.png";
import Table from "../Table/Table";
import ProviderData from "../Table/ProviderData";
import { AiOutlinePlus } from "react-icons/ai";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import {
  StyledModalBackground,
  StyledModalContent,
  StyledButtonService,
  StyledSubmit,
} from "../STYLED-COMPONENT/StyledModal";
import Selector from "../Libary/Select";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";
import { FaTimes } from "react-icons/fa";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";
import ButtonLoader from "../RE-USEABLE-COMPONENT/ButtonLoader";
import Modal2 from "./Modal2";

const ServiceManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [newService, setNewService] = useState(false);
  const [addNewService, setAddNewService] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newProvider, setNewProvider] = useState([]);
  const [ProviderId, setProviderId] = useState();
  const [keys, setkeys] = useState("");
  const [pname, setPname] = useState("");
  const [pid, setPid] = useState("");
  //eslint-disable-next-line
  const [pstatus, setpstatus] = useState("primary");
  // const [keyname, setkeyname] = useState("clientId");
  //eslint-disable-next-line
  const [providers, setProviders] = useState({
    provider_name: "",
    providerKey: {
      ClientId: keys && keys,
    },
    provider_id: pid && pid,
  });
  console.log(pname);
  console.log(pid);
  console.log(providers);
  //eslint-disable-next-line
  const [ClientId, setClientId] = useState(false);

  const columns = [
    { field: "SERVICE NAME", icon: <ColumnSorting />, header: "SERVICE NAME" },
    { field: "CATEGORY", header: "CATEGORY" },
    { field: "PRICE", icon: <ColumnSorting />, header: "PRICE" },
    { field: "PROVIDER", icon: <ColumnSorting />, header: "PROVIDER" },
    {
      field: "ACTIVE/DE-ACTIVE",
      icon: <ColumnSorting />,
      header: "ACTIVE/DE-ACTIVE",
    },
  ];

  let userDetail = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: `bearer ${userDetail?.data?.token}`,
      // "Content-Type": "multipart/form-data",
    },
  };

  const fetchAgents = async () => {
    await axios
      .get(`${process.env.REACT_APP_HTTP_ROUTER}/provider`, config)
      .then((res) => {
        setNewProvider(res?.data?.data?.providers);
        setProviderId(res?.data?.data?.providers[0]?.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(ProviderId);
  const sortState = newProvider.map((d) => {
  //eslint-disable-next-line
    const state = d.name;
    return {
      value: d.id,
      label: d.name,
    };
  });

  // const handleChange = (e) => {
  //   const { value, name } = e.target;

  //   setProviders((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  const submitNewProvider = async (e) => {
    e.preventDefault();
    setLoading(true);

  //eslint-disable-next-line
    const AddNewAgent = await axios
      .post(
        `${process.env.REACT_APP_HTTP_ROUTER}/provider/select`,
        {
          status: pstatus,
          provider_name: pname,
          providerKey: {
            clientId: keys && keys,
          },
          provider_id: pid && pid,
        },
        config
      )
      // .then((response) => {
      //   if (response?.data?.status === true) {
      //     // throw new Error("something went wrong ");
      //     loading(false);
      //     setCardAdded2(true);
      //     setIsOpen(false);
      //     setTimeout(() => {
      //       window.location.assign("/service-management");
      //     }, 2000);
      //   }
      // })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        // toast.error(`${e.response.data.errors[0].msg}`);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 300 });
    fetchAgents();
  //eslint-disable-next-line
  }, []);
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Service Management"
          input="show"
          placeholder="Search Terminal ID, Agent or Agent Managers"
        />
        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6>Service / Providers</h6>
              <div
                className="d-flex justify-content-between"
                // style={{ width: "65%" }}
              >
                <StyledButtonService onClick={() => setIsOpen(true)}>
                  <span className="pe-2">
                    <AiOutlinePlus />
                  </span>{" "}
                  Add New Provider
                </StyledButtonService>

                <Modal open={isOpen}>
                  <StyledModalBackground>
                    <StyledModalContent
                      width="70%"
                      padding="2rem 3rem"
                      data-aos="slide-down"
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>Add New Provider</p>

                        <button
                          onClick={() => setIsOpen(false)}
                          style={{ border: "none", background: "white" }}
                        >
                          <CancelBtn />
                        </button>
                      </h4>

                      <form action="" onSubmit={submitNewProvider}>
                        <div className="add-new-terminal-input ">
                          <div className="add-new-terminal mb-3">
                            <div className="add-new-terminal-input1">
                              <Label
                                text="Primary Provider"
                                type="require"
                                htmlFor="PrimaryProvider"
                              />
                              <Selector
                                id="PrimaryProvider"
                                placeholder="Select your default provider"
                                // value={providers.provider_name}
                                data={sortState}
                                selected={(e) => {
                                  setPname(e.label);
                                  setPid(e.value);
                                }}
                              />
                            </div>
                            <div className="add-new-terminal-input1">
                              <Label
                                text="secondary provider (optional)"
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
                            <Modal2 emma={ClientId}>
                              <div className="sub-modal-content-add-agent  ">
                                <Label
                                  text="Provider key"
                                  type="require"
                                  htmlFor="primaryProviderKey"
                                />

                                <input
                                  type="text"
                                  // width="100%"
                                  id="primaryProviderKey"
                                  placeholder="Enter your Provider key"
                                  // onChange={handleChange}
                                  name="primaryProviderKey"
                                  value={providers.providerKey}
                                />
                              </div>
                            </Modal2>
                            {/* <div className="sub-modal-content-add-agent ">
                              <Label
                                text="Service ID (For Secondary Provider)"
                                type="require"
                                htmlFor="ServiceID"
                              />
                              <input
                                type="text"
                                id="ServiceID"
                                placeholder="Enter Service ID"
                                onChange={handleChange}
                              />
                            </div> */}
                          </div>

                          <div className="add-new-terminal ">
                            <div className="sub-modal-content-add-agent  ">
                              <Label
                                text="Service ID (For Primary Provider)"
                                type="require"
                                htmlFor="ServiceName"
                              />

                              <input
                                type="text"
                                id="ServiceName"
                                placeholder="Enter Service Name"
                                onChange={(e) => setkeys(e.target.value)}
                                name="primaryServiceProvider"
                                // value={providers.primaryServiceProvider}
                              />
                            </div>
                            <div className="sub-modal-content-add-agent ">
                              <Label
                                text="Service ID (For Secondary Provider)"
                                type="require"
                                htmlFor="ServiceID"
                              />
                              <input
                                type="text"
                                id="ServiceID"
                                placeholder="Enter Service ID"
                                // onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="add-new-terminal ">
                            <div className="add-new-terminal-input11  q">
                              <button
                                onClick={() => {
                                  // setIsOpen(false);
                                  // setCardAdded2(true);
                                }}
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
                        <p>Your Card Details has been successfully Added.</p>
                      </div>
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>

                <StyledButtonService
                  new="new"
                  onClick={() => {
                    setNewService(true);
                  }}
                >
                  <span className="pe-2">
                    <AiOutlinePlus />
                  </span>{" "}
                  Add New Service
                </StyledButtonService>

                <Modal open={newService}>
                  <StyledModalBackground>
                    <StyledModalContent
                      width="50%"
                      padding="2rem 3rem"
                      data-aos="slide-down"
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>My Services</p>

                        <button
                          onClick={() => setNewService(false)}
                          style={{
                            border: "none",
                            background: "transparent",
                            display: "flex",
                            fontWeight: "bold",
                          }}
                        >
                          <span className="fs-4">
                            <FaTimes />
                          </span>
                        </button>
                      </h4>

                      <div className="add-new-terminal-input ">
                        <div className="add-new-terminal ">
                          <div style={btn2}>
                            <StyledSubmit
                              padding=".7rem 0"
                              onClick={() => {
                                setNewService(false);
                                setAddNewService(true);
                              }}
                            >
                              Add More Services
                            </StyledSubmit>
                          </div>
                          <div style={btn2}>
                            <StyledSubmit
                              done="done"
                              padding=".7rem 0"
                              onClick={() => {
                                setNewService(false);
                              }}
                            >
                              Done
                            </StyledSubmit>
                          </div>
                        </div>
                      </div>
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>

                <Modal open={addNewService}>
                  <StyledModalBackground>
                    <StyledModalContent
                      width="45%"
                      padding="2rem 3rem"
                      data-aos="slide-down"
                    >
                      <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                        <p>My Services</p>

                        <button
                          onClick={() => setAddNewService(false)}
                          style={{
                            border: "none",
                            background: "white",
                            fontWeight: "bold",
                          }}
                        >
                          X
                        </button>
                      </h4>

                      <div className="section-myservice px-2">
                        <div className="my-services">
                          {/* were to display (my service data) */}
                        </div>

                        <div className="my-services-add-service">
                          <h5>Add New Services</h5>
                          <p>
                            Select from the lists of Services provided below
                          </p>

                          <form action="">
                            <label htmlFor="">Select All</label>
                            {/* were (add new services will display) */}
                          </form>
                        </div>
                      </div>
                      <div className="add-new-terminal ">
                        <StyledSubmit
                          done="done"
                          padding=".7rem 0"
                          onClick={() => {
                            setAddNewService(false);
                          }}
                        >
                          Proceed
                        </StyledSubmit>
                      </div>
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>
              </div>
            </div>
            <div className="footer">
              <Table
                columns={columns}
                ProviderData={ProviderData}
                color="ProviderData"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceManagement;

const btn2 = {
  width: "48%",
};
