import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../index.css";
import "./modal.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import Modal from "./Modal";

import { TbSelector } from "react-icons/tb";
import { FaArrowDown, FaBell, FaEye, FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

//pictures
import ProfilePicture from "../picture/pics1.jpg";
import Payment from "../picture/payment.png";
import BlueChart from "../picture/Vector.png";
import Table from "../Table/Table";
import data from "../Table/data";
import Selector from "../Libary/Select";
import MasterCard from "../picture/Mastercard-Logo 1.png";
import FeaturedIcon from "../picture/Featured icon.png";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [goOpen, setGoOpen] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded1, setCardAdded1] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  // const [init, setInit] = useState(1);
  const columns = [
    { field: "Agent Name", icon: <TbSelector />, header: "Agent Name" },
    { field: "Agent ID", header: "Agent ID" },
    { field: "phone", icon: <TbSelector />, header: "Phone Number" },
    { field: "Business Name", icon: <TbSelector />, header: "Business Name" },
    { field: "Email Address", icon: <TbSelector />, header: "Email Address" },
    { field: "states", icon: <TbSelector />, header: "States" },
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

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>My Account</h4>
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
                  <h4 className="m-0 fw-bold">#500,000,783</h4>
                  <div className="ms-3 fs-3">
                    <FaEye />
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
                  <div
                    className="overlay"
                    // onClick={() => {
                    //   setIsOpen(false);
                    //   // setIsDropped(!isDropped);
                    // }}
                    // style={{ textAlign: "center" }}
                  >
                    <div
                      className="container bg-white mt-4 text-dark"
                      style={{
                        padding: "3rem 4rem",
                        borderRadius: ".9rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      data-aos="slide-down"
                    >
                      <div className="new-card-main">
                        <div className="new-card-button">
                          <button onClick={() => setAddCard(false)}>
                            Close
                          </button>
                        </div>
                        <div className="new-card-number">
                          <label htmlFor="cardNumber">Card Number</label>
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
                        <aside className="d-flex justify-content-between align-items-center">
                          <div className="new-card-expiration">
                            <label htmlFor="expiration">Expiration</label>
                            <div>
                              <input
                                type="text"
                                id="expiration"
                                placeholder="MM/YY"
                              />
                            </div>
                          </div>

                          <div className="new-card-CVC">
                            <label htmlFor="CVC">CVC</label>
                            <div>
                              <input type="text" id="CVC" placeholder="CVC" />
                            </div>
                          </div>
                        </aside>

                        <div className="new-card-country">
                          <label htmlFor="country">Country</label>
                          <div className="new-card-country-input-div">
                            <input
                              type="text"
                              id="country"
                              placeholder="Nigeria"
                            />
                            <div>
                              <AiOutlineDown />
                            </div>
                          </div>
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
                    </div>
                  </div>
                </Modal>

                <Modal open={cardAdded}>
                  <div
                    className="overlay"
                    onClick={() => {
                      setCardAdded(false);
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
                        <p>Your Card Details has been successfully Added.</p>
                      </div>
                    </div>
                  </div>
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
                    <div
                      className="overlay "
                      // onClick={() => {
                      //   setIsOpen(false);
                      //   // setIsDropped(!isDropped);
                      // }}
                    >
                      <div
                        className="container bg-white mt-5 text-dark"
                        style={{
                          padding: "3rem 5rem",
                          borderRadius: ".4rem",
                          width: "80%",
                        }}
                        data-aos="slide-down"
                      >
                        <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                          <h4>FUND WALLET</h4>
                          <button
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            X
                          </button>
                        </div>

                        <div className="modal-content-payment-method">
                          <label htmlFor="payment">Payment Method</label>
                          <Selector
                            placeholder="Select Your Payment Method"
                            data={options}
                            isSearch={true}
                          />

                          <div className="modal-content-payment-method-input-div2">
                            <div className="sub-modal-content-payment-method-input-div2">
                              <label htmlFor="amount">Amount</label>
                              <input
                                type="text"
                                placeholder="Enter Amount"
                                id=""
                              />
                            </div>

                            <div className="sub-modal-content-payment-method-input-div2">
                              <label htmlFor="amount">Narration</label>
                              <input
                                type="text"
                                placeholder="Enter Description (optional)"
                                id=""
                              />
                            </div>
                          </div>

                          <div className="modal-content-payment-method-submit">
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
                      </div>
                    </div>
                  </Modal>

                  <Modal open={cardAdded1}>
                    <div
                      className="overlay"
                      onClick={() => {
                        setCardAdded1(false);
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
                          <p>Your Card Details has been successfully Added.</p>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="total-onboard-agent">
              <div className="total-onboard-agent-aside1">
                <div className="sub1-total-onboard-agent-aside1">
                  <p>Total Onboard Agent</p>
                  <h1>4,231</h1>
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
                  <div
                    className="overlay  d-flex justify-content-center align-items-center flex-direction-column"
                    // onClick={() => {
                    //   setGoOpen(false);
                    // }}
                  >
                    <div
                      className="container bg-white text-dark"
                      style={{
                        padding: "3rem 4rem",
                        borderRadius: ".4rem",
                        width: "80%",
                      }}
                      data-aos="slide-down"
                    >
                      <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                        <h4>Fund Agent`s Account</h4>
                        <button
                          onClick={() => {
                            setGoOpen(false);
                          }}
                        >
                          X
                        </button>
                      </div>

                      <div className="modal-content-payment-method">
                        <label htmlFor="payment">Payment Method</label>
                        <div className="modal-content-payment-method-input-div">
                          <Selector
                            placeholder="Select Your Payment Method"
                            data={options1}
                          />
                        </div>

                        <div className="modal-content-payment-method-input-div2">
                          <div className="sub-modal-content-payment-method-input-div2">
                            <label htmlFor="amount">Amount</label>
                            <input
                              type="text"
                              placeholder="Enter Amount"
                              id=""
                            />
                          </div>

                          <div className="sub-modal-content-payment-method-input-div2">
                            <label htmlFor="amount">Narration</label>
                            <input
                              type="text"
                              placeholder="Enter Description (optional)"
                              id=""
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
                        <p>Your Card Details has been successfully Added.</p>
                      </div>
                    </div>
                  </div>
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
