import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

// import "../index.css";
import "./modal.css";
import SideNavbar from "./SideNavbar";
import Modal from "./Modal";
import { FaEye, FaTimes } from "react-icons/fa";
// import { AiOutlineDown } from "react-icons/ai";
import { ImUpload } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";

//pictures
import Payment from "../picture/payment.svg";
import BlueChart from "../picture/Vector.png";
import Table from "../Table/Table";
import data from "../Table/data";
import Selector from "../Libary/Select";
import MasterCard from "../picture/Mastercard-Logo 1.png";
import FeaturedIcon from "../picture/Featured icon.png";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import PasswordInput from "../REGISTER/passwordinput";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
import { BsEyeSlashFill } from "react-icons/bs";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";
import Label from "../RE-USEABLE-COMPONENT/Label";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [goOpen, setGoOpen] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded1, setCardAdded1] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);
  const [wallet, setWallet] = useState(0);
  const [total, setTotal] = useState(0);
  const [logo, setLogo] = useState(false);

  const [showBalance, setShowBalance] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState();

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

  const options = [
    { value: "BankTransfer", label: "Bank Transfer" },
    { value: "card", label: "Card" },
  ];

  const options1 = [
    { value: "Individual", label: "Individual" },
    { value: "MultipleAll", label: "Multiple (All)" },
  ];

  const walletEyeHandler = () => {
    setShowBalance(!showBalance);
  };

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const configWallet = {
    headers: {
      Authorization: `bearer ${userDetails?.data?.token}`,
    },
  };

  const fetchWalet = async () => {
    await axios
      .get(`${process.env.REACT_APP_HTTP_ROUTER}/wallet/balance`, configWallet)
      .then((res) => {
        setWallet(res.data.data.balance.wallet);
        setTotal(res.data.data.total_agent);
        setCurrencySymbol(res.data.data.currency.symbol);
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 300 });
    fetchWalet();
    // fetchTotalAgent();
  }, []);

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="My Account"
          input="show"
          placeholder="Search Terminal ID, Agent or Agent Managers"
        />

        <div className="body--content">
          <section className="my-account-section">
            <div className="main-account">
              <div className="main-account-aside1">
                <p>Main Account</p>
                <p>Available Balance</p>
              </div>
              <div className="main-account-aside2">
                <div className="sub1-main-account-aside2">
                  <h6>My Card Details</h6>
                  <div>5321 **** **** 4567</div>
                </div>
                <div className="sub2-main-account-aside2">
                  <h4
                    className="m-0 fw-bold"
                    style={{ transition: ".3s linear" }}
                  >
                    <span className="pe-1">{currencySymbol}</span>{" "}
                    {showBalance ? wallet : "**** ****"}
                  </h4>
                  <div
                    onClick={walletEyeHandler}
                    className="ms-3 fs-3 d-flex "
                    style={{ cursor: "pointer", transition: ".2s linear" }}
                  >
                    {showBalance ? <BsEyeSlashFill /> : <FaEye />}
                  </div>
                </div>
              </div>
              <div className="main-account-aside3">
                <button
                  className="main-account-aside3-btn1"
                  onClick={() => setAddCard(true)}
                >
                  + Add New Card
                </button>

                <Modal open={addCard}>
                  <StyledModalBackground>
                    <StyledModalContent
                      data-aos="slide-down"
                      width="50%"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: ".7rem 0",
                      }}
                    >
                      <div className="new-card-main">
                        <div className="new-card-button text-end">
                          <button onClick={() => setAddCard(false)}>
                            Close
                          </button>
                        </div>
                        <div className="new-card-number">
                          <Label
                            text="Card Number"
                            type="require"
                            htmlFor="cardNumber"
                          />
                          <div className="new-card-number-input-div">
                            <input
                              type="text"
                              id="cardNumber"
                              placeholder="1234 1234 1234 1234"
                            />
                            <div>
                              <img src={MasterCard} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className=" new-card-number-input-div1 ">
                          <div className="new-card-expiration1">
                            <Label
                              text="Expiration"
                              type="require"
                              htmlFor="expiration"
                            />
                            <input
                              type="text"
                              id="expiration"
                              placeholder="MM/YY"
                            />
                          </div>

                          <div className="new-card-expiration1">
                            <Label text="CVC" type="require" htmlFor="CVC" />
                            <div>
                              <input type="text" id="CVC" placeholder="CVC" />
                            </div>
                          </div>
                        </div>

                        <div className="new-card-country">
                          <Label
                            text="Country"
                            type="require"
                            htmlFor="country"
                          />
                          <Selector
                            placeholder="Nigeria"
                            id="country"
                            padding=".4rem 0"
                          />
                        </div>

                        <div className="new-card-paragraph">
                          <p>
                            By Providing your card information, you allow agency
                            banking to charge your card for future payments in
                            accordance with thier terms
                          </p>
                        </div>

                        <div className="new-card-add-card-botton">
                          <button
                            onClick={() => {
                              setCardAdded(true);
                              setAddCard(false);
                            }}
                          >
                            Add Card
                          </button>
                        </div>
                      </div>
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>

                <Modal open={cardAdded}>
                  <StyledModalBackground
                    onClick={() => {
                      setCardAdded(false);
                    }}
                  >
                    <StyledModalContent
                      confirm="confirm"
                      width="30%"
                      padding="1rem"
                      data-aos="slide-down"
                    >
                      <div className="modal-content-n mb-3 text-start">
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
                <div className="over">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="main-account-aside3-btn2 modd"
                  >
                    {" "}
                    Fund Wallet
                  </button>
                  <Modal open={isOpen}>
                    <StyledModalBackground>
                      <StyledModalContent
                        width="65%"
                        padding="4rem"
                        data-aos="slide-down"
                      >
                        <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                          <h4>FUND WALLET</h4>
                          <button
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            <CancelBtn />
                          </button>
                        </div>

                        <div className="modal-content-payment-method">
                          <Label
                            text="Payment Method"
                            type="require"
                            htmlFor="payment"
                          />
                          <Selector
                            placeholder="Select Your Payment Method"
                            data={options}
                            isSearch={true}
                            padding=".9rem .5rem"
                          />

                          <div className="modal-content-payment-method-input-div2">
                            <div className="sub-modal-content-payment-method-input-div2">
                              <Label
                                text="Amount"
                                type="require"
                                htmlFor="amount"
                              />

                              <PasswordInput
                                which="normalInput"
                                placeholder="Enter Amount"
                                id="amount"
                                className="py-4"
                              />
                            </div>

                            <div className="sub-modal-content-payment-method-input-div2">
                              <Label
                                text="Narration"
                                type="normal"
                                htmlFor="Narration"
                              />
                              <PasswordInput
                                which="normalInput"
                                placeholder="Enter Description (optional)"
                                id="Narration"
                                className="py-4"
                              />
                            </div>
                          </div>

                          <div className="modal-content-payment-method-submit ">
                            <button
                              onClick={() => {
                                setIsOpen(false);
                                setCardAdded1(true);
                              }}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </StyledModalContent>
                    </StyledModalBackground>
                  </Modal>

                  <Modal open={cardAdded1}>
                    <StyledModalBackground
                      onClick={() => {
                        setCardAdded1(false);
                      }}
                    >
                      <StyledModalContent
                        width="30%"
                        padding="1rem"
                        data-aos="zoom-up"
                      >
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
                </div>
              </div>
            </div>

            <div className="total-onboard-agent">
              <div className="total-onboard-agent-aside1">
                <div className="sub1-total-onboard-agent-aside1">
                  <p>Total Onboard Agent</p>
                  <h1>{total}</h1>
                </div>
                <div className="sub2-main-account-aside1">
                  <img src={Payment} alt="" />
                </div>
              </div>
              <div className="total-onboard-agent-aside2">
                <div className="">
                  <img src={BlueChart} alt="" />
                  <span className="ps-2" style={{ fontSize: ".85rem" }}>
                    5.5%
                  </span>
                  <small className="ps-1">Up from last week</small>
                </div>
                <button
                  onClick={() => setGoOpen(true)}
                  className="total-onboard-agent-aside1-btn"
                >
                  Fund Agent's Wallet
                </button>
                <Modal open={goOpen}>
                  <StyledModalBackground>
                    <StyledModalContent
                      width="65%"
                      padding="2.6rem 4rem"
                      data-aos="slide-down"
                    >
                      <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                        <h4>Fund Agent`s Account</h4>
                        <button
                          onClick={() => {
                            setGoOpen(false);
                          }}
                        >
                          <CancelBtn />
                        </button>
                      </div>

                      <div className="modal-content-payment-method">
                        <Label
                          text="Payment Method"
                          type="require"
                          htmlFor="payment"
                        />
                        <div className="modal-content-payment-method-input-div">
                          <Selector
                            placeholder="Select Your Payment Method"
                            data={options1}
                            padding=".9rem .3rem"
                          />
                        </div>

                        <div className="modal-content-payment-method-input-div2">
                          <div className="sub-modal-content-payment-method-input-div2">
                            <Label
                              text="Amount"
                              type="require"
                              htmlFor="amount"
                            />

                            <PasswordInput
                              which="normalInput"
                              placeholder="Enter Amount"
                              id="amount"
                              className="py-4"
                            />
                          </div>

                          <div className="sub-modal-content-payment-method-input-div2">
                            <Label
                              text="Narration"
                              type="normal"
                              htmlFor="Narration"
                            />

                            <PasswordInput
                              which="normalInput"
                              placeholder="Enter Description (optional)"
                              id="Narration"
                              className="py-4"
                            />
                          </div>
                        </div>

                        <div className="sub-modal-content-add1 mt-3">
                          <Label
                            text="Bulk Upload"
                            type="normal"
                            htmlFor="image"
                          />
                          <div className="fileInput1">
                            <span className="uploads">
                              <ImUpload />{" "}
                              <span>Upload Multiple Agent Files</span>
                            </span>
                            <input
                              type="file"
                              placeholder="Select and Upload an Image"
                              id="image"
                              name="logo"
                              onChange={(e) => {
                                setLogo((prev) => {
                                  return {
                                    ...prev,
                                    logo: e.target.files[0],
                                  };
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="modal-content-payment-method-submit">
                          <button
                            onClick={() => {
                              setGoOpen(false);
                              setCardAdded2(true);
                            }}
                          >
                            Proceed
                          </button>
                        </div>
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
                      width="30"
                      padding="1rem"
                      data-aos="zoom-up"
                    >
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
              </div>
            </div>
          </section>

          <div className="footer">
            <div className="nav-footer">
              <h6>Agents</h6>
            </div>

            <Table columns={columns} data={data} color="agent" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyAccount;
