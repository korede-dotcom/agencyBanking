// import "./AddNewCard.css"
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

//PICTURES
import FeaturedIcon from "../picture/Featured icon.png";

const NewService = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overlay">
      <div className="modal-content " style={{ padding: "3rem 6rem" }}>
        <div className="modal-content-sec1 d-flex pb-3 fw-bold">
          <h4>My Service</h4>
          <div className="new-card-button">
            <Link to="/Agent-Management/Agents/each-agent">
              <button>X</button>
            </Link>
          </div>
        </div>

        <div className="modal-content-sec1-body">
          <div className="modal-content-sec1-body-form">
            <div className="sub-modal-content-sec1-body-form">
              <input type="checkbox" id="DSTV" className="form-check-input" />
              <label htmlFor="DSTV">DSTV</label>
            </div>
            <div className="sub-modal-content-sec1-body-form">
              <input
                type="checkbox"
                id="Airtime"
                className="form-check-input"
              />
              <label htmlFor="Airtime">Airtime</label>
            </div>
            <div className="sub-modal-content-sec1-body-form">
              <input type="checkbox" id="GOTV" className="form-check-input" />
              <label htmlFor="GOTV">GOTV</label>
            </div>
            <div className="sub-modal-content-sec1-body-form">
              <input
                type="checkbox"
                id="Electricity"
                className="form-check-input"
              />
              <label htmlFor="Electricity">Electricity</label>
            </div>
            <div className="sub-modal-content-sec1-body-form">
              <input type="checkbox" id="FIRS" className="form-check-input" />
              <label htmlFor="FIRS">FIRS</label>
            </div>
            <div className="sub-modal-content-sec1-body-form">
              <input type="checkbox" id="FRSC" className="form-check-input" />
              <label htmlFor="FRSC">FRSC</label>
            </div>
          </div>

          <div className="modal-content-sec1-body-add">
            <h5>Add New Services</h5>
            <p>Select from the list of services provided below</p>
            <label className="wq" htmlFor="NURTW">
              Select All
            </label>

            <div className="modal-content-sec1-body-form">
              <div className="sub-modal-content-sec1-body-form">
                <input
                  type="checkbox"
                  id="NURTW"
                  className="form-check-input"
                />
                <label htmlFor="NURTW">NURTW</label>
              </div>
            </div>
          </div>
          <div className="modal-content-payment-method-submit">
            <button onClick={() => setIsOpen(true)}>Proceed</button>
            <Modal open={isOpen}>
              <div className="overlay se">
                <div className="modal-content-added a1">
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
  );
};

export default NewService;
