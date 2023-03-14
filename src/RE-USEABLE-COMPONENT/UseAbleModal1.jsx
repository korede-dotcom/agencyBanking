import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "../components/Modal";

import { FaTimes } from "react-icons/fa";

//pictures
import FeaturedIcon2 from "../picture/FeaturedIcon2.png";
import FeaturedIcon from "../picture/Featured icon.png";

function UseAbleModal1({ show }) {
  const [isOpen, setIsOpen] = useState(show);
  const [cardAdded, setCardAdded] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <>
      <Modal open={isOpen}>
        <div className="overlay" onClick={() => {}}>
          <div
            className="container bg-white mt-5 text-dark"
            style={{ padding: "3rem 4rem", borderRadius: ".4rem" }}
            data-aos="slide-down"
          >
            <div className="modal-content-sec1 d-flex pb-3 fw-bold">
              <h4 style={{ color: "black" }}>Add New Agents</h4>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                X
              </button>
            </div>

            <div className="modal-content-payment-method">
              <div className="modal-content-add-agent">
                <div className="sub-modal-content-add-agent">
                  <label htmlFor="AgentFullName">Agent`s Full Name</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Business Name"
                      id="AgentFullName"
                    />
                  </div>
                </div>

                <div className="sub-modal-content-add-agent">
                  <label htmlFor="PhoneNumber">
                    Phone Number (Must be attached to your BVN)
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Phone Number linked to your BVN"
                      id="PhoneNumber"
                    />
                  </div>
                </div>
              </div>

              <div className="modal-content-add-agent">
                <div className="sub-modal-content-add-agent">
                  <label htmlFor="BusinessName">Business Name</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Business Name"
                      id="BusinessName"
                    />
                  </div>
                </div>

                <div className="sub-modal-content-add-agent">
                  <label htmlFor="BusinessAddress">Business Address</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Business Address"
                      id="BusinessAddress"
                    />
                  </div>
                </div>
              </div>

              <div className="modal-content-add-agent">
                <div className="sub-modal-content-add-agent">
                  <label htmlFor="LocalGovernmentArea">
                    Local Government Area
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Local Government Area"
                      id="LocalGovernmentArea"
                    />
                  </div>
                </div>

                <div className="sub-modal-content-add-agent">
                  <label htmlFor="agentState">State</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      id="agentState"
                    />
                  </div>
                </div>
              </div>

              <div className="modal-content-add-agent">
                <div className="sub-modal-content-add-agent">
                  <label htmlFor="LocalGovernmentArea">
                    Government Issued ID (BVN,NIN)
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Government Issued ID"
                      id="LocalGovernmentArea"
                    />
                  </div>
                </div>

                <div className="sub-modal-content-add-agent">
                  <label htmlFor="" style={{ color: "white" }}>
                    .
                  </label>
                  <div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setCardAdded(true);
                      }}
                      className=""
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
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
                <div>
                  <img style={{ width: "80%" }} src={FeaturedIcon2} alt="" />
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
              <p>Your Card Details has been successfully Added.</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default UseAbleModal1;
