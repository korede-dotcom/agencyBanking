import React, { useEffect } from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";
import { FaSearch } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import Table from "../Table/Table";
import Disputess from "../Table/DisputeData";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";

const Disputes = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const columns = [
    { field: "AGENT NAME", icon: <ColumnSorting />, header: "AGENT NAME" },
    { field: "AGENT ID", icon: <ColumnSorting />, header: "AGENT ID" },
    { field: "PHONE NUMBER", icon: <ColumnSorting />, header: "PHONE NUMBER" },
    {
      field: "AGENT`S BUSINESS NAME",
      icon: <ColumnSorting />,
      header: "AGENT`S BUSINESS NAME",
    },
    {
      field: "AGENT`S BUSINESS ADDRESS",
      icon: <ColumnSorting />,
      header: "AGENT`S BUSINESS ADDRESS",
    },
    {
      field: "TRANSACTION DISPUTE CONTENT",
      header: "TRANSACTION DISPUTE CONTENT",
    },
    { field: "ACTION", icon: <ColumnSorting />, header: "ACTION" },
    {
      field: "RESOLVED STATUS",
      icon: <ColumnSorting />,
      header: "RESOLVED STATUS",
    },
  ];
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar text="Dispute" />
        <div className="body--content">
          <div className="footer">
            <div className="nav-footer">
              <h6>Agent`s Transaction Dispute</h6>
              <div
                className="d-flex justify-content-between"
                style={{ width: "35%" }}
              >
                <div
                  className="input-top-nav d-flex align-items-center"
                  style={{
                    background: "#f8faff",
                    border: "1px solid #00b3fe",
                    width: "100%",
                  }}
                >
                  <div style={{ color: "#868fa0" }}>
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Service name, Category,Price, e.t.c"
                    style={{ background: "#f8faff" }}
                  />
                </div>
              </div>
            </div>
            <div className="footer">
              <Table
                columns={columns}
                Disputess={Disputess}
                color="Disputess"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Disputes;
