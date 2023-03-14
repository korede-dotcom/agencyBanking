import React, { useState } from "react";
// import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import "./SignIn.css";
import { Link } from "react-router-dom";

import SignInFrame from "../PICTURES/Frame.png";
import PasswordInput from "./passwordinput";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState("");

  const handlerInput = (e) => {
    setEmail(e.target.value);
  };

  const handlerInputpassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setUserDetails(`Hello ${email}  ${password}`);
    // console.log(email, password);
  };

  //  const [isLogin, setIsLogin] = useState("http://89.38.135.41:3100/access/login")
  return (
    <div>
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
                <h2>Login</h2>
                <p>Name of Company.Logo</p>
              </div>

              <form action="" onSubmit={handlerSubmit}>
                <div className="signin-password-section">
                  <label htmlFor="signInemail">Username or Email</label>
                  <div className="signin-password-input-div1">
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

                <div className="signin-password-section">
                  <label htmlFor="signInPassword">Password</label>

                  <div>
                    <PasswordInput
                      which="hide&show"
                      placeholder="Enter Your Password"
                      id="signInPassword"
                      value={password}
                      handlerInput={handlerInputpassword}
                    />
                  </div>
                </div>

                <section className="signIn-checkbox-section">
                  <div className="signIn-checkbox-div1">
                    <div className="pe-2">
                      <input
                        type="checkbox"
                        id="signIncheckbox"
                        className="form-check-input"
                      />
                    </div>
                    <label htmlFor="signIncheckbox">Remember me ?</label>
                  </div>

                  <div className="signIn-checkbox-div2">
                    <p>Forgot Password?</p>
                  </div>
                </section>

                <button type="submit" className="sbtn">
                  Login
                </button>
              </form>

              {/* <NavLink to="/" style={{ textDecoration: "none" }}> */}
              <div className="already">
                <p>Don`t have an Account? </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h6>Register</h6>
                </Link>
              </div>
              {/* </NavLink> */}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
