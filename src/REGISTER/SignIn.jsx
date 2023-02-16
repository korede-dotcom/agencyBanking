import "./SignIn.css";
import { Link } from "react-router-dom";

import SignInFrame from "../PICTURES/Frame.png";
import PasswordInput from "./passwordinput";
// import SignInBG1 from "../PICTURES/signinn.png";

const SignIn = () => {
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

              <form action="">
                <div className="signin-password-section">
                  <label htmlFor="signInemail">Email</label>
                  <div class="signin-password-input-div1">
                    <PasswordInput
                      which="normalInput"
                      type="email"
                      placeholder="Enter Your Email Address"
                      id="signInemail"
                    />
                  </div>
                </div>

                <div className="signin-password-section">
                  <label htmlFor="signInPassword">Password</label>
                  <PasswordInput
                    which="hide&show"
                    placeholder="Enter Your Password"
                    id="signInPassword"
                  />
                </div>

                <div className="signin-password-section">
                  <label htmlFor="signInConfirmPassword">
                    Confirm Password
                  </label>
                  <PasswordInput
                    which="hide&show"
                    placeholder="Confirm Your Password"
                    id="signInConfirmPassword"
                  />
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

                <Link to="/register">
                  <button className="sbtn">Register</button>
                </Link>
              </form>

              {/* <NavLink to="/" style={{ textDecoration: "none" }}> */}
              <div className="already">
                <p>Already have an Account? </p>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <h6>Login</h6>
                </Link>
              </div>
              {/* </NavLink> */}
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
