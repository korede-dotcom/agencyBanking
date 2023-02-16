import "../index.css"
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

//PICTURES
import FeaturedIcon from "../picture/Featured icon.png"


const AddNewService = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="add-new-terminal " style={{ background: "#f8f8f8", padding: "3rem 0" }}>
        <div className="container bg-white" style={{ padding: "3rem 4rem" }}>
            <h4 className="add-new-terminal-sub1 d-flex justify-content-between px-4">
                <p>Add New Service</p>
                <Link to="/terminal-management" className='text-dark' style={{ textDecoration: "none" }}>
                    <h3>X</h3>
                </Link>
            </h4>

            <div className="add-new-terminal-input ">
                <div className="add-new-terminal ">
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="ServiceID">Service ID</label>
                        <input type="text" id="ServiceID" placeholder="Enter Service ID" />
                    </div>
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="ServiceManufacturer">Service Manufacturer</label>
                        <input type="text" id="ServiceManufacturer" placeholder="Enter Service Manufacturer" />
                    </div>
                </div>

                <div className="add-new-terminal ">
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="SerialNumber">Service Serial Number</label>
                        <input type="text" id="SerialNumber" placeholder="Enter Service Serial Number" />
                    </div>
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="ServiceManufacturer">Transaction Limit</label>
                        <input type="text" id="ServiceManufacturer" placeholder="Enter Service Manufacturer" />
                    </div>
                </div>

                <div className="add-new-terminal">
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="ServiceLocation">Service Location</label>
                        <input type="text" id="ServiceLocation" placeholder="Enter Service Location" />
                    </div>
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="ServiceState">State</label>
                        <input type="text" id="ServiceState" placeholder="Enter your Service State" />
                    </div>
                </div>

                <div className="add-new-terminal ">
                    <div className="add-new-terminal-input1 ">
                        <label htmlFor="FullName">Assign Agent</label>
                        <input type="text" id="FullName" placeholder="Select an existing Agent to Service (optional" />
                    </div>
                    <div className="add-new-terminal-input1  ">
                        <button onClick={() => setIsOpen(true)}>Submit</button>
                        <Modal open={isOpen} >
                        <div className="overlay se" style={{paddingTop: "8rem"}}>
                            <div className="modal-content-added a1 h7" style={{ margin: "auto"}}>
                                <div className="modal-content-n mb-3" >
                                    <div><img src={FeaturedIcon} alt="" /></div>
                                </div>

                                <div className="modal-content-card-added">
                                    <h3>Card Added</h3>
                                    <p>Your Card Details has been successfully Added.</p>
                                    <div className="text-end">
                                        <button onClick={() => {
                                            setIsOpen(false)
                                        }}>Back</button>
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
}
 
export default AddNewService;