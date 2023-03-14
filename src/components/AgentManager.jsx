import React from "react";
import "../index.css";
import SideNavbar from "./SideNavbar";
import Agent1 from "./Agent1";
import Navbar from "../RE-USEABLE-COMPONENT/Navbar";

const AgentManagement = () => {
  return (
    <main className="d-flex">
      <SideNavbar />

      <section className="section1 ">
        <Navbar text="Agent Management" />
        <Agent1 />
      </section>
    </main>
  );
};

export default AgentManagement;
