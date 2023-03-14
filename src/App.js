import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentManagement from "./components/AgentManager";
import Agents from "./components/Agents";
import EachAgent from "./components/EachAgent";
import Dashboard from "./components/MainPage";
import MyAccount from "./components/Myaccount";
import Profile from "./components/Profile";
import RentalService from "./components/RentalService";
import ServiceManagement from "./components/ServiceManagement";
import TerminalManagement from "./components/TerminalManagement";
import Login from "./REGISTER/Login";
import SignIn from "./REGISTER/SignIn";
import Reporting from "./components/Reporting";
import Staff from "./components/Staff";
import Disputes from "./components/Disputes";
import Commissions from "./components/Commissions";
import PasswordSent from "./REGISTER/PasswordSent";
import ConfirmPassword from "./REGISTER/ConfirmPassword";
import AirtimeCommission from "./CommissionComponent/AirtimeCommission";
import DataCommision from "./CommissionComponent/DataCommision";
import InternetCommission from "./CommissionComponent/InternetCommission";
import CableTvCommission from "./CommissionComponent/CableTvCommission";
import ElectricityCommission from "./CommissionComponent/ElectricityCommission";
import OtherCommission from "./CommissionComponent/OtherCommission";
import Transaction from "./TRACSACTION/Transaction";
import Request from "./components/Request";
import TerminalUnassigned from "./components/TerminalUnassigned";

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/passwordSent" element={<PasswordSent/>} />

          <Route path="/Login" element={<Login />} />

          <Route path="/ConfirmPassword" element={<ConfirmPassword />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/my-account" element={<MyAccount />} />

          <Route path="/agent-management" element={<AgentManagement />} />

          <Route path="/terminal-management/assigned" element={<TerminalManagement />} />

          <Route path='/terminal-management/unassigned' element={<TerminalUnassigned/>} />

          <Route path="/service-management" element={<ServiceManagement />} />

          <Route path="/Rental-service" element={<RentalService />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/Commissions" element={<Commissions />} >
            <Route path="airtime" element={<AirtimeCommission/>}/>
            <Route path="data" element={<DataCommision/>}/>
            <Route path="internet" element={<InternetCommission/>}/>
            <Route path="CableTV" element={<CableTvCommission/>}/>
            <Route path="Electricity" element={<ElectricityCommission/>}/>
            <Route path="others" element={<OtherCommission/>}/>
          </Route>
          
          <Route path="/TransactionLimit" element={<Transaction />} />

          <Route path="/request" element={<Request />} />

          <Route path="/agent-Management/agents" element={<Agents />} />

          <Route path="/Agent-Management/each-agent" element={<EachAgent />} />

          <Route path="/reporting" element={<Reporting />} />

          <Route path="/staffs" element={<Staff />} />

          <Route path="/disputes" element={<Disputes />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;