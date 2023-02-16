import "../index.css";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaBell,
  FaSearch,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

//pictures
import ProfilePicture from "../picture/pics1.jpg";

const Provider = () => {
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <nav className="top-nav navbar">
          <div className="left-top-nav ">
            <h4>Providers</h4>
          </div>

          <div className="right-top-nav-div d-flex">
            <div className="notification">
              <p>.</p>
              <div>
                <FaBell />
              </div>
            </div>
            <Link
              to="/profile"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <div className="profile d-flex align-items-center">
                <div className="profile-img">
                  <img src={ProfilePicture} alt="" />
                </div>
                <div className="profile-name ">
                  <div>
                    Okorie Emmanuel{" "}
                    <span>
                      <FaArrowDown />
                    </span>
                  </div>
                  <p>Super Agent</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
        <div className="body--content">
          {/* <section className="my-account-section">
                
                </section> */}

          <div className="footer">
            <div className="nav-footer">
              <h6>List of Providers</h6>
              <div
                className="d-flex justify-content-between"
                style={{ width: "65%" }}
              >
                <div
                  className="input-top-nav d-flex align-items-center"
                  style={{ background: "#f8faff", border: "1px solid #00b3fe" }}
                >
                  <div style={{ color: "#868fa0" }}>
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Terminal ID, Agent or Agent managers"
                    style={{ background: "#f8faff" }}
                  />
                </div>

                <button className="main-account-aside3-btn1 ">
                  + Add New Agent Manager
                </button>
              </div>
            </div>
            {/* <div className="nav-footer2 d-flex align-items-center py-2 px-4 bg-white">
                            <button>Agent Managers</button>
                            <div>Agents</div>
                        </div> */}
            <div className="body-footer">
              {/* <div className='head-body-footer row py-3' style={{ background: '#fafafa', color: " #868fa0" }}>
                                <div className='col-2'>AGENT NAME  <FaCompressAlt /></div>
                                <div className='col-1'>AGENT ID</div>
                                <div className='col-2'>PHONE NUMBER  <FaCompressAlt /></div>
                                <div className='col-2'>BUSINESS NAME <FaCompressAlt /></div>
                                <div className='col-2'>EMAIL ADDRESS  <FaCompressAlt /></div>
                                <div className='col-2'>STATE  <FaCompressAlt /></div>
                                <div className='col-1'>STATUS  <FaCompressAlt /></div>
                            </div> */}
              <div className="sub-body-footer align-items-center bg-white row">
                <div className="col-2">James Adekola</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div
                className="sub-body-footer align-items-center row"
                style={{ background: "#fafafa" }}
              >
                <div className="col-2">Shola Adeniyi</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div className="sub-body-footer align-items-center bg-white row">
                <div className="col-2">James Adekola</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div
                className="sub-body-footer align-items-center row"
                style={{ background: "#fafafa" }}
              >
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div className="sub-body-footer align-items-center bg-white row">
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-off ">
                  <FaToggleOff />
                </div>
              </div>
              <div
                className="sub-body-footer align-items-center row"
                style={{ background: "#fafafa" }}
              >
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div className="sub-body-footer align-items-center bg-white row">
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div
                className="sub-body-footer align-items-center row"
                style={{ background: "#fafafa" }}
              >
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div className="sub-body-footer align-items-center bg-white row">
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-off">
                  <FaToggleOff />
                </div>
              </div>
              <div
                className="sub-body-footer row align-items-center"
                style={{ background: "#fafafa" }}
              >
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
              <div className="sub-body-footer bg-white row align-items-center">
                <div className="col-2">Tayo Temitope</div>
                <div className="col-1">N1123SB3</div>
                <div className="col-2">+23481 3226 5445</div>
                <div className="col-2">TM30 GLOBAL INTERNATIONAL</div>
                <div className="col-2">CUSTOMER@TM30.COM.NG</div>
                <div className="col-2">LAGOS STATE</div>
                <div className="col-1 toggle-on">
                  <FaToggleOn />
                </div>
              </div>
            </div>

            <div className="foot-footer bg-white">
              <p>Showing 1 to 5 of 100 entries</p>
              <div className="sub-foot-footer">
                <div className="previous">
                  <FaArrowLeft />
                  Previous
                </div>
                <div className="n1">1</div>
                <div className="n2">2</div>
                <div className="n2">3</div>
                <div className="n2">4</div>
                <div className="n2">...</div>
                <div className="n2">10</div>
                <div className="next">
                  Next <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Provider;
