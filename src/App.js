import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewService from "./components/AddNewService";
import AddNewTerminal from "./components/AddNewTerminal";
import AgentManagement from "./components/AgentManager";
import Agents from "./components/Agents";
import EachAgent from "./components/EachAgent";
import Dashboard from "./components/MainPage";
import MyAccount from "./components/Myaccount";
import AddNewService from "./components/NewService";
import Profile from "./components/Profile";
import Provider from "./components/Provider";
import RentalService from "./components/RentalService";
import ServiceManagement from "./components/ServiceManagement";
import TerminalManagement from "./components/TerminalManagement";
import AllService from "./components/ViewAllService";
import Login from "./REGISTER/Login";
import Register from "./REGISTER/Register";
import SignIn from "./REGISTER/SignIn";
import Reporting from "./components/Reporting";
import Staff from "./components/Staff";
import Disputes from "./components/Disputes";

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/my-account" element={<MyAccount />} />

          <Route path="/agent-management" element={<AgentManagement />} />

          <Route path="/terminal-management" element={<TerminalManagement />} />

          <Route path="/service-management" element={<ServiceManagement />} />

          <Route path="/Rental-service" element={<RentalService />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/terminal-management/AddNewTerminal" element={<AddNewTerminal />} />

          <Route path="/provider" element={<Provider />} />

          <Route path="/agent-Management/agents" element={<Agents />} />

          <Route path="/Agent-Management/Agents/each-agent" element={<EachAgent />} />

          <Route path="/Agent-Management/Agents/each-agent/new-service" element={<NewService />} />

          <Route path="/ViewAllService" element={<AllService />} />

          <Route path="/service-management/AddNewService" element={<AddNewService />} />

          <Route path="/reporting" element={<Reporting />} />

          <Route path="/staffs" element={<Staff />} />

          <Route path="/disputes" element={<Disputes />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;