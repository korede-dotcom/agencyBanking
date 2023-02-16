import Reg from "../PICTURES/signup-reg.png";
import "./signup.css";

import { Link } from "react-router-dom";
import PasswordInput from "./passwordinput";

const Register = () => {
  return (
    <>
      <div className="signup-overall">
        <section className="Signup-section ">
          <div className="signup_reg">
            <img src={Reg} alt="" />
          </div>

          <section className="form-section">
            <div className="form-section1">
              <div className="signin-input-section">
                <label htmlFor="BusinessName">Business Name</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Your Business Name"
                    id="BusinessName"
                  />
                </div>
              </div>

              <div className="signin-input-section">
                <label htmlFor="BusinessAddress">Business Address</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Your Business Address"
                    id="BusinessAddress"
                  />
                </div>
              </div>

              <div className="signin-input-section">
                <label htmlFor="LGA">Local Government Area</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Your Local Government Area"
                    id="LGA"
                  />
                </div>
              </div>

              <div className="signin-input-section">
                <label htmlFor="ID">Government Issued ID (BNV, NIN)</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Your Government Issued ID"
                    id="ID"
                  />
                </div>
              </div>
            </div>

            <div className="form-section2">
              <div className="signin-input-section">
                <label htmlFor="EmailAddress">Email Address (optional)</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Your Business Email Address"
                    id="EmailAddress"
                  />
                </div>
              </div>

              <div className="signin-input-section">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="number"
                    placeholder="Enter Your Phone Number"
                    id="PhoneNumber"
                  />
                </div>
              </div>

              <div className="signin-input-section">
                <label htmlFor="signupstate">State</label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Your State"
                    id="signupstate"
                  />
                </div>
              </div>

              <div className="signin-input-section">
                <label htmlFor="RegistrationDetails">
                  Business Registration Details
                </label>
                <div className="signin-input-div">
                  <PasswordInput
                    which="normalInput"
                    type="text"
                    placeholder="Enter Business Registration Details"
                    id="RegistrationDetails"
                  />
                </div>
              </div>

              <Link to="/dashboard">
                <button class="sbtn">Next</button>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Register;
