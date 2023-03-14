import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Transaction.css";
import axios from "axios";
import SideNavbar from "../components/SideNavbar";

//pictures
import Speedy from "./pictures/speedy.png";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import Modal from "../components/Modal";
import Selector from "../Libary/Select";
import {
  StyledButton,
  StyledModalBackground,
  StyledModalContent,
  StyledSubmit,
} from "../STYLED-COMPONENT/StyledModal";
import Label from "../RE-USEABLE-COMPONENT/Label";
import CancelBtn from "../RE-USEABLE-COMPONENT/CancelBtn";

const Transaction = () => {
  const [ModalState, setModalState] = useState(false);
  const [readyonly, setReadyonly] = useState(true);
  const [setCommission, setSetCommission] = useState({
    setCommission: "Set New Limit",
    saveCommission: "Save New Limit",
  });

  const [DailySending, setDailySending] = useState(0);
  const [DailyLimit, setDailyLimit] = useState(0);
  const [dailyRecieving, setDailyRecieving] = useState(0);

  const [weeklySending, setWeeklySending] = useState(0);
  const [weeklyLimit, setWeeklyLimit] = useState(0);
  const [WeeklyRecieving, setWeeklyRecieving] = useState(0);

  const [monthlySending, setMonthlySending] = useState(0);
  const [monthlyLimit, setMonthlyLimit] = useState(0);
  const [monthlyRecieving, setMonthlyRecieving] = useState(0);

  const [YearlySending, setYearlySending] = useState(0);
  const [YearlyLimit, setYearlyLimit] = useState(0);
  const [YearlyRecieving, setYearlyRecieving] = useState(0);

  const [daily, setDaily] = useState(false);
  const [CurrencySymbol, setCurrencySymbol] = useState();
  // const [updateAll, setUpdateAll] = useState({});
  const handlePercentage = (e) => {
    // setTransaction(e.target.value);
  };

  const handleEdit = () => {
    setReadyonly(false);
  };

  const handleDone = () => {
    setReadyonly(true);
  };
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const configWallet = {
    headers: {
      Authorization: `bearer ${userDetails?.data?.token}`,
    },
  };

  const fetchTransaction = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_HTTP_ROUTER}/settings/transactioncap`,
        configWallet
      )
      .then((response) => {
        if (response.data.status) {
          setDailySending(response.data.data.tranxcap.daily_limit_sending);
          setDailyLimit(response.data.data.tranxcap.daily_limit);
          setDailyRecieving(response.data.data.tranxcap.daily_limit_receiving);
          setCurrencySymbol(response.data.data.currency.symbol);
          setWeeklySending(response.data.data.tranxcap.weekly_limit_sending);
          setWeeklyLimit(response.data.data.tranxcap.weekly_limit);
          setWeeklyRecieving(
            response.data.data.tranxcap.weekly_limit_receiving
          );

          setMonthlySending(response.data.data.tranxcap.monthly_limit_sending);
          setMonthlyLimit(response.data.data.tranxcap.monthly_limit);
          setMonthlyRecieving(
            response.data.data.tranxcap.monthly_limit_receiving
          );

          setMonthlySending(response.data.data.tranxcap.monthly_limit_sending);
          setMonthlyLimit(response.data.data.tranxcap.monthly_limit);
          setMonthlyRecieving(
            response.data.data.tranxcap.monthly_limit_receiving
          );

          setYearlySending(response.data.data.tranxcap.yearly_limit_sending);
          setYearlyLimit(response.data.data.tranxcap.yearly_limit);
          setYearlyRecieving(
            response.data.data.tranxcap.yearly_limit_receiving
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // localStorage.setItem("fetchTransaction", JSON.stringify(fetchTransaction));
  };

  const submithandler1 = async (e) => {
    e.preventDefault();
    const configAgent = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${userDetails?.data?.token}`,
      },
    };
    const UpdataAll1 = await axios
      .put(
        `${process.env.REACT_APP_HTTP_ROUTER}/settings/transactioncap`,
        inputValue,
        configAgent
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error("something went wrong ");
        }
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    console.log(name, value);
    setInputValue((prev) => {
      return { ...prev, [name]: parseInt(value) };
    });
  };

  const [inputValue, setInputValue] = useState({
    daily_limit_sending: "",
    daily_limit_receiving: "",
    daily_limit: "",
    weekly_limit_sending: "",
    weekly_limit_receiving: "",
    weekly_limit: "",
    monthly_limit_sending: "",
    monthly_limit_receiving: "",
    monthly_limit: "",
    yearly_limit_sending: "",
    yearly_limit_receiving: "",
    yearly_limit: "",
  });

  useEffect(() => {
    Aos.init({ duration: 300 });
    fetchTransaction();
    submithandler1();
  }, []);
  // const [state, dispatch] = useReducer(reducer, ModalState);
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar text="Settings" />

        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6 className="p-3">Default Transaction Limit</h6>

              <div className="w-25">
                <StyledButton
                  assign="assign"
                  onClick={() => {
                    setModalState(true);
                  }}
                >
                  Update All Transactions Limit
                </StyledButton>
                <Modal open={ModalState}>
                  <StyledModalBackground>
                    <StyledModalContent width="80%" padding="1.5rem 3rem">
                      <form
                        action=""
                        onSubmit={submithandler1}
                        encType="multipart/form-data"
                      >
                        <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                          <h4 style={{ color: "black" }}>Transactions Limit</h4>
                          <button
                            onClick={() => {
                              setModalState(false);
                            }}
                          >
                            <CancelBtn />
                          </button>
                        </div>

                        <div className="modal-content-payment-method">
                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Daily Sending (Per Transaction)"
                                type="require"
                                htmlFor="daily_limit_sending"
                              />
                              <div>
                                <input
                                  placeholder={`${CurrencySymbol} ${DailySending}`}
                                  type="number"
                                  id="daily_limit_sending"
                                  value={inputValue.daily_limit_sending}
                                  name="daily_limit_sending"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Daily Recieving (Per Transaction)"
                                type="require"
                                htmlFor="daily_limit_receiving"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${dailyRecieving}`}
                                  id="daily_limit_receiving"
                                  value={inputValue.daily_limit_receiving}
                                  name="daily_limit_receiving"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Daily Transaction Limit"
                                type="require"
                                htmlFor="daily_limit"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${DailyLimit}`}
                                  id="dailyLimit"
                                  value={inputValue.daily_limit}
                                  name="daily_limit"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Weekly Sending (Per Transaction)"
                                type="require"
                                htmlFor="weekly_limit_sending"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${weeklySending}`}
                                  id="weekly_limit_sending"
                                  value={inputValue.weekly_limit_sending}
                                  name="weekly_limit_sending"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Weekly Recieving (Per Transaction)"
                                type="require"
                                htmlFor="weekly_limit_receiving"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${WeeklyRecieving}`}
                                  id="weekly_limit_receiving"
                                  value={inputValue.weekly_limit_receiving}
                                  name="weekly_limit_receiving"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Weekly Transaction Limit"
                                type="require"
                                htmlFor="weekly_limit"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${weeklyLimit}`}
                                  id="weekly_limit"
                                  value={inputValue.weekly_limit}
                                  name="weekly_limit"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Monthly Sending (Per Transaction)"
                                type="require"
                                htmlFor="monthly_limit_sending"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${monthlySending}`}
                                  id="monthly_limit_sending"
                                  value={inputValue.monthly_limit_sending}
                                  name="monthly_limit_sending"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Monthly Recieving (Per Transaction)"
                                type="require"
                                htmlFor="monthly_limit_receiving"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${monthlyRecieving}`}
                                  id="monthly_limit_receiving"
                                  value={inputValue.monthly_limit_receiving}
                                  name="monthly_limit_receiving"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Monthly Transaction Limit"
                                type="require"
                                htmlFor="monthly_limit"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${monthlyLimit}`}
                                  id="monthly_limit"
                                  value={inputValue.monthly_limit}
                                  name="monthly_limit"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-content-add-agent">
                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Yearly Sending (Per Transaction)"
                                type="require"
                                htmlFor="yearly_limit_sending"
                              />
                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${YearlySending}`}
                                  id="yearly_limit_sending"
                                  value={inputValue.yearly_limit_sending}
                                  name="yearly_limit_sending"
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Yearly Recieving (Per Transaction)"
                                type="require"
                                htmlFor="yearly_limit_receiving"
                              />

                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${YearlyRecieving}`}
                                  id="yearly_limit_receiving"
                                  name="yearly_limit_receiving"
                                  value={inputValue.yearly_limit_receiving}
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>

                            <div className="sub-modal-content-add-agent2">
                              <Label
                                text="Set Yearly Transaction Limit"
                                type="require"
                                htmlFor="yearly_limit"
                              />

                              <div>
                                <input
                                  type="number"
                                  placeholder={`${CurrencySymbol} ${YearlyLimit}`}
                                  id="yearly_limit"
                                  name="yearly_limit"
                                  value={inputValue.yearly_limit}
                                  onChange={handleOnChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-50 mt-5 mx-auto">
                            <StyledSubmit
                              done="done"
                              type="submit"
                              padding=".9rem 0"
                              onSubmit={submithandler1}
                              // onClick={() => {
                              //   setIsOpen(false);
                              //   setCardAdded2(true);
                              // }}
                              className=""
                            >
                              Submit
                            </StyledSubmit>
                          </div>
                        </div>
                      </form>
                    </StyledModalContent>
                  </StyledModalBackground>
                </Modal>
              </div>
            </div>

            <div className="transferLimitAll">
              <section className="transferLimit">
                <div className="sub-transferLimit">
                  <aside className="speedyDiv">
                    <div className="imgDiv">
                      <img src={Speedy} alt="" />
                    </div>
                    <div className="sub-speedyDiv">
                      <div>Manage Daily Limit</div>
                      <small>Increase or reduce Daily transfer Limit</small>
                    </div>
                  </aside>

                  <aside className="secdingDiv">
                    <div className="sub-secdingDiv">
                      <p>Sending (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {DailySending}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Receiving (Per Transaction)</p>

                      <div>
                        {CurrencySymbol}
                        {dailyRecieving}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Daily Transaction Limit</p>
                      <div>
                        {CurrencySymbol}
                        {DailyLimit} per day
                      </div>
                    </div>
                  </aside>

                  <div className="limitBtn">
                    <button
                      onClick={() => {
                        setDaily(true);
                      }}
                    >
                      Update Transaction Limit
                    </button>
                  </div>

                  <Modal open={daily}>
                    <StyledModalBackground>
                      <StyledModalContent
                        data-aos="slide-down"
                        width="70%"
                        padding="3rem"
                      >
                        <div className="modal-content-sec1 d-flex pb-3 fw-bold">
                          <h4>Update Daily Transaction Limit</h4>
                          <button
                            onClick={() => {
                              setDaily(false);
                            }}
                          >
                            X
                          </button>
                        </div>

                        <div className="modal-content-payment-method">
                          <Label
                            text="Select Transaction Limit Type"
                            type="require"
                            htmlFor="LimitType"
                          />
                          <Selector
                            placeholder="Sending (Per Transaction)"
                            id="LimitType"
                            // data={options}
                            isSearch={true}
                            padding=".8rem 0"
                          />

                          <div className="modal-content-payment-method-input-div2">
                            <div className="sub-modal-content-payment-method-input-div2">
                              <Label
                                text="Present Transaction Limit"
                                type="normal"
                                htmlFor="amount"
                              />

                              <div style={billeridDiv}>
                                <div style={inputDivAll}>
                                  {CurrencySymbol}
                                  <input
                                    type="number"
                                    value={DailySending}
                                    id="SetNewTransaction"
                                    style={inputD}
                                    readOnly
                                    onChange={handlePercentage}
                                  />
                                </div>
                              </div>
                            </div>

                            <div style={billerid}>
                              <Label
                                text="Set New Transaction Limit"
                                type="require"
                                htmlFor="SetNewTransaction"
                              />
                              <div style={billeridDiv}>
                                <div style={inputDivAll}>
                                  {CurrencySymbol}
                                  <input
                                    type="number"
                                    defaultValue={DailyLimit}
                                    id="SetNewTransaction"
                                    style={inputD}
                                    readOnly={readyonly}
                                    onChange={handlePercentage}
                                  />
                                </div>

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
                          </div>

                          <div className="modal-content-payment-method-submit ">
                            <button
                              onClick={() => {
                                setDaily(false);
                                // setCardAdded1(true);
                              }}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </StyledModalContent>
                    </StyledModalBackground>
                  </Modal>
                </div>

                <div className="sub-transferLimit">
                  <aside className="speedyDiv">
                    <div className="imgDiv">
                      <img src={Speedy} alt="" />
                    </div>
                    <div className="sub-speedyDiv">
                      <div>Manage Weekly Limit</div>
                      <small>Increase or reduce Daily transfer Limit</small>
                    </div>
                  </aside>

                  <aside className="secdingDiv">
                    <div className="sub-secdingDiv">
                      <p>Sending (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {weeklySending}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Receiving (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {WeeklyRecieving}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Daily Transaction Limit</p>
                      <div>
                        {CurrencySymbol}
                        {weeklyLimit} per day
                      </div>
                    </div>
                  </aside>

                  <div className="limitBtn">
                    <button>Update Transaction Limit</button>
                  </div>
                </div>
              </section>

              <section className="transferLimit">
                <div className="sub-transferLimit">
                  <aside className="speedyDiv">
                    <div className="imgDiv">
                      <img src={Speedy} alt="" />
                    </div>
                    <div className="sub-speedyDiv">
                      <div>Manage Monthly Limit</div>
                      <small>Increase or reduce Daily transfer Limit</small>
                    </div>
                  </aside>

                  <aside className="secdingDiv">
                    <div className="sub-secdingDiv">
                      <p>Sending (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {monthlySending}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Receiving (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {monthlyRecieving}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Daily Transaction Limit</p>
                      <div>
                        {CurrencySymbol}
                        {monthlyLimit} per day
                      </div>
                    </div>
                  </aside>

                  <div className="limitBtn">
                    <button>Update Transaction Limit</button>
                  </div>
                </div>

                <div className="sub-transferLimit">
                  <aside className="speedyDiv">
                    <div className="imgDiv">
                      <img src={Speedy} alt="" />
                    </div>
                    <div className="sub-speedyDiv">
                      <div>Manage Yearly Limit</div>
                      <small>Increase or reduce Daily transfer Limit</small>
                    </div>
                  </aside>

                  <aside className="secdingDiv">
                    <div className="sub-secdingDiv">
                      <p>Sending (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {YearlySending}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Receiving (Per Transaction)</p>
                      <div>
                        {CurrencySymbol}
                        {YearlyRecieving}
                      </div>
                    </div>

                    <div className="sub-secdingDiv">
                      <p>Daily Transaction Limit</p>
                      <div>
                        {CurrencySymbol}
                        {YearlyLimit} per day
                      </div>
                    </div>
                  </aside>

                  <div className="limitBtn">
                    <button>Update Transaction Limit</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transaction;

const edit = {
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#1b59f8",
};

const inputDivAll = {
  display: "flex",
  alignItems: "center",
  width: "55%",
};

const inputD = {
  width: "100%",
  padding: "1.35rem 0",
  border: "none",
  outline: "none",
  color: "rgba(0,0,0,0.8)",
  fontSize: ".91rem",
};
const billerid = {
  width: "50%",
};
const billeridDiv = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1.5px solid #ccc",
  padding: "0 .8rem",
  borderRadius: ".4rem",
};
