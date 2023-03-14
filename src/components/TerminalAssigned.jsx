import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import { FaSearch } from "react-icons/fa";
import Table from "../Table/Table";
import TerminalData from "../Table/terminalData";
import { StyledButton } from "../STYLED-COMPONENT/StyledModal";
import ColumnSorting from "../RE-USEABLE-COMPONENT/ColumnSorting";

function TerminalAssigned() {
  const columns = [
    { field: "Agent Name", icon: <ColumnSorting />, header: "Agent Name" },
    { field: "Agent ID", header: "Agent ID" },
    { field: "phone", icon: <ColumnSorting />, header: "Phone Number" },
    {
      field: "Business Name",
      icon: <ColumnSorting />,
      header: "Business Name",
    },
    {
      field: "Email Address",
      icon: <ColumnSorting />,
      header: "Email Address",
    },
    { field: "states", icon: <ColumnSorting />, header: "States" },
    { field: "status", header: "Status" },
  ];
  return (
    <>
      <div className="body--content">
        <div className="footer">
          <div className="nav-footer">
            <h6>Terminal</h6>
            <div style={{ width: "35%" }}>
              <div
                className="input-top-nav d-flex align-items-center"
                style={{
                  background: "#f8faff",
                  border: ".04rem solid #00b3fe",
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
                  placeholder="Search Terminal ID, location, Serial Number e.t.c"
                  style={{ background: "#f8faff" }}
                />
              </div>
            </div>
          </div>
          <div className="TerminalLinks py-3 bg-white">
            <StyledButton assign="assign">Assigned Terminals</StyledButton>

            <Link to="/terminal-management/unassigned">
              <StyledButton>Unassigned Terminals</StyledButton>
            </Link>
          </div>
          <div className="footer">
            <Table
              columns={columns}
              TerminalData={TerminalData}
              color="terminalData"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalAssigned;
