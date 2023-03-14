import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "../components/Modal";

//pictures
import FeaturedIcon from "../picture/Featured icon.png";
import Selector from "../Libary/Select";
import {
  StyledModalBackground,
  StyledModalContent,
} from "../STYLED-COMPONENT/StyledModal";
import Label from "../RE-USEABLE-COMPONENT/Label";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";

function SetCommission() {
  const styles1 = {
    backgroundColor: "#1b58f9",
    border: "none",
    padding: ".5rem 1.3rem",
    borderRadius: ".4rem",
    color: "white",
    marginLeft: "3rem",
  };

  const [percentage, setPercentage] = useState(15);
  const [readyonly, setReadyonly] = useState(true);
  const [setCommission, setSetCommission] = useState({
    setCommission: "Edit Commission",
    saveCommission: "Save New Commission",
  });
  const [commissionInputValue, setCommissionInputValue] = useState({
    billername: "",
    billerid: "",
    percentage: "",
    primaryprovider: "",
    secondaryprovider: "",
  });

  const handlePercentage = (e) => {
    setPercentage(e.target.value);
  };
  console.log(percentage);

  const handleEdit = () => {
    setReadyonly(false);
    setPercentage(percentage);
  };

  const handleDone = () => {
    setPercentage(percentage);
    console.log(percentage);
    setReadyonly(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [cardAdded2, setCardAdded2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const submithandler1 = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    console.log(name, value);
    setCommissionInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <section>
        <div className="d-flex align-items-center p-3">
          <h4>Select Biller: </h4>
          <button
            style={styles1}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Set Commission
          </button>
          <Modal open={isOpen}>
            <StyledModalBackground>
              <StyledModalContent
                data-aos="slide-down"
                padding="3rem"
                width="70%"
              >
                <form action="" onSubmit={submithandler1}>
                  <div className="modal-content-sec1 d-flex pb-2 fw-bold">
                    <h4 style={{ color: "black" }}>Commission</h4>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <CancelBtn />
                    </button>
                  </div>

                  <div className="modal-content-payment-method">
                    <div className="modal-content-add-agent">
                      <div className=" w-50 me-5">
                        <Label
                          text="Agent`s Full Name"
                          type="require"
                          htmlFor="AgentFullName"
                        />
                        <Selector
                          id="AgentFullName"
                          placeholder="MTN-Nigeria"
                          padding=".6rem 0"
                        />
                      </div>

                      <div className="sub-modal-content-add-agent mb-3">
                        <Label
                          text="Biller ID"
                          type="require"
                          htmlFor="AgentFullName"
                        />
                        <div>
                          <input
                            type="text"
                            placeholder="324823471"
                            id="billerid"
                            value={commissionInputValue.billerid}
                            name="billerid"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div style={billerid}>
                      <Label
                        text="Commission Percentage"
                        type="require"
                        htmlFor="CommissionPercentage"
                      />
                      <div style={billeridDiv}>
                        <input
                          type="number"
                          defaultValue={percentage}
                          id="CommissionPercentage"
                          style={inputD}
                          readOnly={readyonly}
                          onChange={handlePercentage}
                        />

                        {readyonly ? (
                          <p
                            className="m-0"
                            style={edit}
                            onClick={() => {
                              handleEdit();
                            }}
                          >
                            {setCommission.setCommission}
                          </p>
                        ) : (
                          <p
                            className="m-0"
                            style={edit}
                            onClick={() => {
                              handleDone();
                            }}
                          >
                            {setCommission.saveCommission}
                          </p>
                        )}
                      </div>
                    </div>

                    <h4 style={seclectPro}>Select Provider</h4>

                    <div className="modal-content-add-agent">
                      <div className=" w-50 me-3">
                        <Label
                          text="Prinary Provider"
                          type="normal"
                          htmlFor="PrinaryProvider"
                        />
                        <Selector
                          id="PrinaryProvider"
                          placeholder="Select your default provider"
                          padding=".6rem 0"
                        />
                      </div>

                      <div className=" w-50 ms-3">
                        <Label
                          text="Secondary Provider"
                          type="require"
                          htmlFor="SecondaryProvider"
                        />
                        <Selector
                          id="SecondaryProvider"
                          placeholder="Select your secondary provider"
                          padding=".6rem 0"
                        />
                      </div>
                    </div>

                    <div className=" text-end">
                      <button
                        type="submit"
                        onClick={() => {
                          setIsOpen(false);
                          setCardAdded2(true);
                        }}
                        style={btnsubmit}
                        className=""
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </StyledModalContent>
            </StyledModalBackground>
          </Modal>

          <Modal open={cardAdded2}>
            <StyledModalBackground
              onClick={() => {
                setCardAdded2(false);
              }}
            >
              <StyledModalContent data-aos="zoom-up" width="27%" padding="1rem">
                <div className="modal-content-n mb-3">
                  <div>
                    <img src={FeaturedIcon} alt="" />
                  </div>
                </div>

                <div className="modal-content-card-added">
                  <h4>Card Added</h4>
                  <p>Your Card Details has been successfully Added.</p>
                </div>
              </StyledModalContent>
            </StyledModalBackground>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default SetCommission;

const btnsubmit = {
  border: "none",
  background: "#1b59f8",
  color: "white",
  width: "48.6%",
  fontSize: "1.3rem",
  borderRadius: ".4rem",
  padding: "1rem 0",
  marginTop: "2rem",
};

const billerid = {
  width: "100%",
};
const billeridDiv = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1.5px solid #ccc",
  padding: "0 .8rem",
  borderRadius: ".4rem",
};

const seclectPro = {
  padding: "1.4rem 0",
};

const edit = {
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#1b59f8",
};

const inputD = {
  width: "80%",
  padding: "1.2rem .8rem",
  border: "none",
  outline: "none",
};
