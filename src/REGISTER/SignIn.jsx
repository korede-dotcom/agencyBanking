import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

import SignInFrame from "../PICTURES/Frame.png";
import PasswordInput from "./passwordinput";
// import SignInBG1 from "../PICTURES/signinn.png";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const handlerInput = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlerSubmit = (e) => {
    console.log(email, "email");
    e.preventDefault();
  };
  return (
    <>
      <div className="jh">
        <section className="sign-in-section">
          <div className="signIp-content">
            <section className="signUp-section1">
              <div className="signIp-content-section1">
                <img src={SignInFrame} alt="" />
              </div>
            </section>

            <section className="signIn-section2">
              <div className="signIp-content-section2">
                <h2>Register</h2>
                <p>Name of Company.Logo</p>
              </div>

              <form action="" onSubmit={handlerSubmit}>
                <div className="signin-password-section">
                  <label htmlFor="signInemail">Email</label>
                  <div class="signin-password-input-div1">
                    <PasswordInput
                      which="normalInput"
                      type="email"
                      placeholder="Enter Your Email Address"
                      id="signInemail"
                      value={email}
                      handlerInput={handlerInput}
                    />
                  </div>
                </div>

                <Link to="/passwordSent">
                  <button
                    // onClick={handlerSubmit}
                    type="submit"
                    className="sbtn"
                  >
                    Register
                  </button>
                </Link>
              </form>

              <div className="already">
                <p>Already have an Account? </p>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <h6>Login</h6>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
