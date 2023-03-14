import "./SignIn.css";
import { Link } from "react-router-dom";

import SignInFrame from "../PICTURES/Frame.png";
import PasswordInput from "./passwordinput";
import { useState } from "react";
// import SignInBG1 from "../PICTURES/signinn.png";

const PasswordSent = () => {
  const [ConfirmPassword, setComfirmPassword] = useState("");

  const handlerInput = (e) => {
    setComfirmPassword(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
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
                  <label htmlFor="signInPassword">
                    Enter Password sent to your email
                  </label>
                  <PasswordInput
                    which="hide&show"
                    placeholder="Enter Your Password"
                    id="signInPassword"
                    handlerInput={handlerInput}
                  />
                </div>

                <Link to="/ConfirmPassword">
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

export default PasswordSent;
