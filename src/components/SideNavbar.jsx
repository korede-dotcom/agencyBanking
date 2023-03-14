import "./SideNavbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaUsers, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import { CgMicrosoft } from "react-icons/cg";
import { GiLaserWarning } from "react-icons/gi";
import { MdAccountBox } from "react-icons/md";
import { FiBarChart, FiLogOut } from "react-icons/fi";

const SideNavbar = () => {
  console.log(window.location.pathname);

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
      URL: "/terminal-management",
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
    {
      icon: <AiFillSetting />,
      name: "Settings",
      URL: "/Commissions",
      // icon2: <AiOutlineDown />,
      id: 8,
      miniLinks: [
        {
          icon: <HiChevronRight />,
          name: "Commissions",
          URL: "/Commissions",
          id: 9,
        },
      ],
    },
    { icon: <FaUsers />, name: "Staffs", URL: "/staffs", id: 10 },
    { icon: <GiLaserWarning />, name: "Disputes", URL: "/disputes", id: 11 },
  ];

  const currLocation = sessionStorage.getItem("tabs");
  // console.log(window.location.pathname);

  return (
    <nav className="sidenav">
      <section className="sidenav-section1 pe-2">
        {links.map((e) => {
          return (
            <>
              <NavLink
                to={e.URL}
                key={e.id}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  sessionStorage.setItem("tabs", e.URL);
                }}
              >
                <div
                  className=" sub-sidenav-section1 "
                  style={{
                    background: `${
                      currLocation === e.URL ? "rgba(27, 89, 248, 0.1)" : ""
                    }`,
                    color: `${currLocation === e.URL ? "#1b59f8" : ""}`,
                    borderLeft: `${
                      currLocation === e.URL ? "#1b59f8 .3rem solid" : ""
                    }`,
                  }}
                >
                  <div>{e.icon}</div>
                  <p>{e.name}</p>
                  <aside>{e.icon2}</aside>
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
                            // background: `${
                            //   window.location.pathname === link.URL
                            //     ? "rgba(27, 89, 248, 0.1)"
                            //     : ""
                            // }`,
                            color: `${
                              window.location.pathname === link.URL
                                ? "#1b59f8"
                                : ""
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

      <Link to="/logout" style={{ textDecoration: "none" }}>
        <div className="logout-side-nav d-flex justify-content-between align-items-center">
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
      </Link>
    </nav>
  );
};

export default SideNavbar;
