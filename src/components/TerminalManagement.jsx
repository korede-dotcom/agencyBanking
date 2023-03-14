import React from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";
import TerminalAssigned from "./TerminalAssigned";

const TerminalManagement = () => {
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar
          text="Terminal Management"
          input="show"
          placeholder="Search Terminal ID, Agent or Agent Managers"
        />
        <TerminalAssigned />
      </section>
    </main>
  );
};

export default TerminalManagement;
