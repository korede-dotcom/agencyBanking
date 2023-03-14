import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
// import { Loader } from "rsuite";

import SignInFrame from "../PICTURES/Frame.png";
import PasswordInput from "./passwordinput";
import axios from "axios";
import ButtonLoader from "../RE-USEABLE-COMPONENT/ButtonLoader";
import Label from "../RE-USEABLE-COMPONENT/Label";
// import Toastify from "../RE-USEABLE-COMPONENT/Toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  // const [toastify, setToastify] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setUserLogin((prev) => {
      return { ...prev, [name]: value };
    });
    if (userLogin.email.length && userLogin.password.length) {
      setDisabled(false);
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(userLogin));
    setSubmitForm(true);
    setLoading(true);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const userDetails = await axios
      .post(
        `${process.env.REACT_APP_HTTP_ROUTER}/auth/login`,
        JSON.stringify(userLogin),
        customConfig
      )
      .catch((error) => {
        // return error;
        toast.error("Unable to Login");
        setLoading(false);
      });
    if (userDetails.data.status === true) {
      toast.success("Sucessfully Login");
      setTimeout(() => {
        window.location.assign("/dashboard");
      }, 2000);
    }

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  useEffect(() => {
    // console.log(formError);
    if (Object.keys(formError).length === 0 && submitForm) {
      // console.log(userLogin);
    }
  //eslint-disable-next-line
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      // setDisabled()
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    // if (!values.password < 0) {
    //   errors.password = "Password must not be less than 4 characters";
    // }
    // if (!values.password > 10) {
    //   errors.password = "Password must not be more than 10 characters";
    // }
    return errors;
  };

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
                  <Label
                    text="Username or Email"
                    type="require"
                    htmlFor="signInemail"
                  />
                  <div className="signin-password-input-div1">
                    <PasswordInput
                      which="normalInput"
                      type="email"
                      placeholder="Enter Your Email Address"
                      id="signInemail"
                      name="email"
                      value={userLogin.email}
                      handlerInput={(e) => handleOnChange(e)}
                    />
                  </div>
                  <small>{formError.email}</small>
                </div>

                <div className="signin-password-section">
                  <Label
                    text="Password"
                    type="require"
                    htmlFor="signInPassword"
                  />
                  <div>
                    <PasswordInput
                      which="hide&show"
                      placeholder="Enter Your Password"
                      id="signInPassword"
                      name="password"
                      value={userLogin.password}
                      handlerInput={handleOnChange}
                    />
                  </div>
                  <small>{formError.password}</small>
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

                <button
                  type="submit"
                  className="sbtn"
                  disabled={disabled}
                  // onClick={notify}
                >
                  {loading ? <ButtonLoader text="Loading..." /> : "Login"}
                </button>
              </form>
              <ToastContainer
                position="top-center"
                autoClose={900}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />

              <div className="already">
                <p>Don`t have an Account? </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h6>Register</h6>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
