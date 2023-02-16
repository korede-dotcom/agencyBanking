import "../index.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

//PICTURES
import FeaturedIcon from "../picture/Featured icon.png";

const AddNewTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="add-new-terminal "
      style={{ background: "#f8f8f8", padding: "3rem 0" }}
    >
      <div className="container bg-white" style={{ padding: "3rem 4rem" }}>
        <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
          <p>Add New Terminal</p>
          <Link
            to="/terminal-management"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <h3>X</h3>
          </Link>
        </h4>

        <div className="add-new-terminal-input ">
          <div className="add-new-terminal ">
            <div className="add-new-terminal-input1 ">
              <label htmlFor="TerminalID">Terminal ID</label>
              <input
                type="text"
                id="TerminalID"
                placeholder="Enter Terminal ID"
              />
            </div>
            <div className="add-new-terminal-input1 ">
              <label htmlFor="TerminalManufacturer">
                Terminal Manufacturer
              </label>
              <input
                type="text"
                id="TerminalManufacturer"
                placeholder="Enter Terminal Manufacturer"
              />
            </div>
          </div>

          <div className="add-new-terminal ">
            <div className="add-new-terminal-input1 ">
              <label htmlFor="SerialNumber">Terminal Serial Number</label>
              <input
                type="text"
                id="SerialNumber"
                placeholder="Enter Terminal Serial Number"
              />
            </div>
            <div className="add-new-terminal-input1 ">
              <label htmlFor="TerminalManufacturer">Transaction Limit</label>
              <input
                type="text"
                id="TerminalManufacturer"
                placeholder="Enter Terminal Manufacturer"
              />
            </div>
          </div>

          <div className="add-new-terminal">
            <div className="add-new-terminal-input1 ">
              <label htmlFor="TerminalLocation">Terminal Location</label>
              <input
                type="text"
                id="TerminalLocation"
                placeholder="Enter Terminal Location"
              />
            </div>
            <div className="add-new-terminal-input1 ">
              <label htmlFor="TerminalState">State</label>
              <input
                type="text"
                id="TerminalState"
                placeholder="Enter your Terminal State"
              />
            </div>
          </div>

          <div className="add-new-terminal ">
            <div className="add-new-terminal-input1 ">
              <label htmlFor="FullName">Assign Agent</label>
              <input
                type="text"
                id="FullName"
                placeholder="Select an existing Agent to terminal (optional"
              />
            </div>
            <div className="add-new-terminal-input1  ">
              <button onClick={() => setIsOpen(true)}>Submit</button>
              <Modal open={isOpen}>
                <div className="overlay se pt-5">
                  <div
                    className="modal-content-added a1 h7"
                    style={{ margin: "auto" }}
                  >
                    <div className="modal-content-n mb-3">
                      <div>
                        <img src={FeaturedIcon} alt="" />
                      </div>
                    </div>

                    <div className="modal-content-card-added">
                      <h3>Card Added</h3>
                      <p>Your Card Details has been successfully Added.</p>
                      <div className="text-end">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTerminal;
