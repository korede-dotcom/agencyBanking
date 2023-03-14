import React, { useState, useEffect } from "react";

import "../index.css";
import SideNavbar from "./SideNavbar";
// import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

//pictures
// import ProfilePicture from "../picture/pics1.jpg";
import BackgroundPicture from "../picture/Cover.png";

import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import {
  StyledInput,
  StyledModalBackground,
  StyledModalContent,
  StyledSubmit,
} from "../STYLED-COMPONENT/StyledModal";
  //eslint-disable-next-line
import PasswordInput from "../REGISTER/passwordinput";
import Label from "../RE-USEABLE-COMPONENT/Label";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";
// import PasswordInput from "../REGISTER/passwordinput";

const Profile = () => {
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const [isOpen, setIsOpen] = useState(false);
  // console.log("test", userDetails.data);
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Profile Management"
          input="show"
          placeholder="Search Terminal ID, Agent and Agent Managers"
        />

        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6>My Profile</h6>
              <button
                className="main-account-aside3-btn1 "
                onClick={() => setIsOpen(true)}
              >
                <FaLock /> <span className="ps-2">Change Password</span>
              </button>

              <Modal open={isOpen}>
                <StyledModalBackground>
                  <StyledModalContent
                    data-aos="slide-down"
                    padding="3rem"
                    width="56%"
                  >
                    <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                      <p>Change Password</p>

                      <button
                        onClick={() => setIsOpen(false)}
                        style={{ border: "none", background: "white" }}
                      >
                        <CancelBtn />
                      </button>
                    </h4>

                    <div className="add-new-terminal-input p-3">
                      <div className=" ">
                        <Label type="require" text="Existing Password" />
                        <StyledInput
                          type="password"
                          placeholder="Enter your Existing Password"
                          padding="1.3rem"
                        />
                      </div>

                      <div className=" my-4 ">
                        <Label type="require" text="New Password" />
                        <StyledInput
                          type="password"
                          placeholder="Enter your New Password"
                          padding="1.3rem"
                        />
                      </div>

                      <div className=" ">
                        <Label type="require" text="Repeat New Password" />
                        <StyledInput
                          type="password"
                          placeholder="Repeat your New Password"
                          padding="1.3rem"
                        />
                      </div>

                      <div className=" mt-5 ">
                        <StyledSubmit
                          done="done"
                          padding="1rem 0"
                          onClick={() => setIsOpen(false)}
                        >
                          Submit
                        </StyledSubmit>
                      </div>
                    </div>
                  </StyledModalContent>
                </StyledModalBackground>
              </Modal>
            </div>
            <div className="my-profile-aside2">
              <div
                className="my-profile-aside2 "
                style={{ backgroundImage: `url(${BackgroundPicture})` }}
              >
                <div className="my-profile-aside2-img">
                  <img
                    src={`${process.env.REACT_APP_HTTP_ROUTER}/${userDetails?.data?.data?.logo}`}
                    alt=""
                  />
                  <h5>{userDetails?.data?.data?.name}</h5>
                </div>
              </div>

              <div style={myProfileAside}>
                <div style={{ width: "45%" }}>
                  <label style={label} htmlFor="FullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    style={inputDiv}
                    id="FullName"
                    value={userDetails?.data?.data?.name}
                    readOnly
                  />
                </div>
                <div style={{ width: "45%" }}>
                  <label style={label} htmlFor="Email">
                    Email Address
                  </label>
                  <input
                    type="text"
                    style={inputDiv}
                    id="Email"
                    readOnly
                    value={userDetails?.data?.data?.email}
                  />
                </div>
              </div>

              <div style={myProfileAside}>
                <div style={{ width: "45%" }}>
                  <label style={label} htmlFor="">
                    Business Name
                  </label>
                  <input
                    type="text"
                    style={inputDiv}
                    readOnly
                    placeholder="TM30 INTERNATIONAL LIMITED"
                  />
                </div>
                <div style={{ width: "20%" }}>
                  <label style={label} htmlFor="">
                    Number of Agents
                  </label>
                  <input
                    type="number"
                    style={inputDiv}
                    readOnly
                    placeholder="234"
                  />
                </div>
                <div style={{ width: "20%" }}>
                  <label style={label} htmlFor="">
                    Number of Terminals
                  </label>
                  <input
                    type="number"
                    readOnly
                    placeholder="300"
                    style={inputDiv}
                  />
                </div>
              </div>

              <div style={myProfileAside}>
                <div className="w-100 ">
                  <label style={label} htmlFor="">
                    Business Address
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder="Enter Your Business Address"
                    style={inputDiv}
                  />
                </div>
              </div>

              <div style={myProfileAside}>
                <div style={{ width: "45%" }}>
                  <input
                    type="text"
                    readOnly
                    placeholder="City"
                    style={inputDiv}
                  />
                </div>
                <div style={{ width: "35%" }}>
                  <input
                    type="number"
                    readOnly
                    placeholder="State/Province"
                    style={inputDiv}
                  />
                </div>
                <div style={{ width: "15%" }}>
                  <input
                    type="number"
                    readOnly
                    placeholder="Zip Code"
                    style={inputDiv}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;

const inputDiv = {
  width: "100%",
  border: "1.4px solid blue",
  backgroundColor: "#e8eefe",
  color: "rgba(0,0,0,0.7)",
  fontWeight: "600",
  outline: "none",
  padding: ".7rem",
  borderRadius: ".45rem",
};
const label = {
  fontWeight: "600",
  paddingBottom: "10px",
  fontSize: ".8rem",
};

const myProfileAside = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2rem",
};
