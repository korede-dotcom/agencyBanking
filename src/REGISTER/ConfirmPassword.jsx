import "./SignIn.css";
import { Link } from "react-router-dom";

import SignInFrame from "../PICTURES/Frame.png";
import PasswordInput from "./passwordinput";
import { useState } from "react";
// import SignInBG1 from "../PICTURES/signinn.png";

const ConfirmPassword = () => {
  const [comfirmPassword1, setComfirmPassword1] = useState("");
  const [comfirmPassword2, setComfirmPassword2] = useState("");

  const handlerInputpassword1 = (e) => {
    setComfirmPassword1(e.target.value);
  };

  const handlerInputpassword2 = (e) => {
    setComfirmPassword2(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // setUserDetails(`Hello ${email}  ${password}`);
    // console.log(email, password);
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
                  <label htmlFor="signInPassword">New Password</label>
                  <PasswordInput
                    which="hide&show"
                    placeholder="Enter Your Password"
                    id="signInPassword"
                    handlerInput={handlerInputpassword1}
                  />
                </div>

                <div className="signin-password-section">
                  <label htmlFor="signInConfirmPassword">
                    Confirm New Password
                  </label>
                  <PasswordInput
                    which="hide&show"
                    placeholder="Confirm Your Password"
                    id="signInConfirmPassword"
                    handlerInput={handlerInputpassword2}
                  />
                </div>

                <Link to="/dashboard">
                  <button type="submit" className="sbtn">
                    Proceed
                  </button>
                </Link>
              </form>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConfirmPassword;
