import React from "react";
import { useState } from "react";
import "./SignIn.css";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

function PasswordInput({
  icon,
  which,
  placeholder,
  id,
  type,
  handlerInput,
  value,
  name,
  className,
  readOnly,
}) {
  const [passwordTypee, setPasswordTypee] = useState("password");
  const [iconTypee, setIconTypee] = useState(IoIosEye);

  const handlePasswordIcon = (e) => {
    e.preventDefault();
    if (passwordTypee === "password") {
      setPasswordTypee("text");
      setIconTypee(IoIosEyeOff);
    } else {
      setPasswordTypee("password");
      setIconTypee(IoIosEye);
    }
  };

  return (
    <>
      {which === "normalInput" && (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handlerInput}
          readOnly={readOnly}
          className={className}
          style={style}
        />
      )}

      {which === "hide&show" && (
        <div className="signin-password-input-div">
          <input
            type={passwordTypee}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handlerInput}
          />
          <div onClick={handlePasswordIcon} className="input-icon">
            {iconTypee}
          </div>
        </div>
      )}
    </>
  );
}

export default PasswordInput;

const style = {
  outline: "none",
};
