import { useState } from "react";
import "./SideNavbar.css";
  //eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaUsers, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import { CgMicrosoft } from "react-icons/cg";
import { GiLaserWarning } from "react-icons/gi";
import { MdAccountBox } from "react-icons/md";
import { FiBarChart, FiLogOut } from "react-icons/fi";
import {
  StyledModalBackground,
  StyledModalContent,
  StyledSubmit,
} from "../STYLED-COMPONENT/StyledModal";
import Modal from "./Modal";

const SideNavbar = () => {
  const [logout, setLogout] = useState(false);

  const HandlerLogout = () => {
    localStorage.clear();
    window.location.assign("/Login");
  };
  const links = [
    { icon: <CgMicrosoft />, name: "Dashboard", URL: "/dashboard", id: 1 },
    { icon: <MdAccountBox />, name: "My Account", URL: "/my-account", id: 2 },
    {
      icon: <FaUserFriends />,
      name: "Agent Management",
      URL: "/agent-management",
      id: 3,
    },
    {
      icon: <FaUser />,
      name: "Terminal Management",
      URL: "/terminal-management/assigned",
      id: 4,
    },
    {
      icon: <FaUsers />,
      name: "Services / Providers",
      URL: "/service-management",
      id: 5,
    },
    {
      icon: <FaUsers />,
      name: "Rental Service",
      URL: "/Rental-service",
      id: 6,
    },
    { icon: <FiBarChart />, name: "Reporting", URL: "/reporting", id: 7 },
    { icon: <GiLaserWarning />, name: "Request", URL: "/request", id: 8 },
    {
      icon: <AiFillSetting />,
      name: "Settings",
      URL: "/Commissions/airtime",
      // icon2: <AiOutlineDown />,
      id: 9,
      miniLinks: [
        {
          icon: <HiChevronRight />,
          name: "Commissions",
          URL: "/Commissions/airtime",
          id: 10,
        },

        {
          icon: <HiChevronRight />,
          name: "Transaction Limit",
          URL: "/TransactionLimit",
          id: 11,
        },
      ],
    },
    { icon: <FaUsers />, name: "Staffs", URL: "/staffs", id: 13 },
    { icon: <GiLaserWarning />, name: "Disputes", URL: "/disputes", id: 14 },
  ];

  const currLocation = sessionStorage.getItem("tabs");
  // console.log(window.location.pathname);

  let navstyle1 = ({ isActive }) => {
    return {
      borderLeft: isActive ? ".3rem solid #1b59f8" : ".3rem solid transparent",
      color: isActive ? "#1b59f8" : "#868fa0",
      background: `${isActive ? "rgba(27, 89, 248, 0.1)" : ""}`,
    };
  };

  return (
    <nav className="sidenav">
      <section className="sidenav-section1 pe-2">
        {links.map((e) => {
          return (
            <>
              <NavLink
                to={e.URL}
                key={e.id}
                className="sub-sidenav-section15"
                style={navstyle1}
                onClick={() => {
                  sessionStorage.setItem("tabs", e.URL);
                }}
              >
                <div
                  className=" sub-sidenav-section1 "
                  // style={{
                  //   background: `${
                  //     currLocation === e.URL ? "rgba(27, 89, 248, 0.1)" : ""
                  //   }`,
                  //   color: `${currLocation === e.URL ? "#1b59f8" : ""}`,
                  //   borderLeft: `${
                  //     currLocation === e.URL ? "#1b59f8 .3rem solid" : ""
                  //   }`,
                  // }}
                >
                  <div>{e.icon}</div>
                  <p>{e.name}</p>
                </div>
              </NavLink>
              {e.URL === currLocation && (
                <div style={{ marginLeft: "20px" }}>
                  {e?.miniLinks?.map((link) => {
                    return (
                      <NavLink
                        to={link.URL}
                        key={link.id}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className=" sub-sidenav-section1 "
                          style={{
                            color: `${
                              window.location.pathname === link.URL
                                ? "#1b59f8"
                                : "#868fa0"
                            }`,
                          }}
                        >
                          <div>{link.icon}</div>
                          <p>{link.name}</p>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </section>

      <div
        className="logout-side-nav d-flex justify-content-between align-items-center"
        onClick={() => setLogout(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="sub-logout ">
          <h6 className="text-dark">Logout</h6>
          <p className="m-0">Super Agent</p>
        </div>
        <div className="logout-icon ">
          <div className="d-flex fs-5 py-2">
            <FiLogOut />
          </div>
        </div>
      </div>
      <Modal open={logout}>
        <StyledModalBackground>
          <StyledModalContent
            data-aos="slide-down"
            padding="2rem 1rem"
            width="25%"
          >
            <div className="text-center">
              <h6>Are you sure you want to Logout?</h6>
              <div className="d-flex justify-content-between pt-4">
                <div style={{ width: "45%" }}>
                  <StyledSubmit
                    padding=".5rem 0"
                    onClick={() => setLogout(false)}
                  >
                    Cancel
                  </StyledSubmit>
                </div>
                <div style={{ width: "45%" }}>
                  <StyledSubmit
                    padding=".5rem 0"
                    done="done"
                    onClick={HandlerLogout}
                  >
                    Logout
                  </StyledSubmit>
                </div>
              </div>
            </div>
          </StyledModalContent>
        </StyledModalBackground>
      </Modal>
    </nav>
  );
};

export default SideNavbar;
