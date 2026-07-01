import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeSignup from "./components/employee/EmployeeSignup";
import EmployeeLogin from "./components/employee/EmployeeLogin";
import EmployeeHome from "./components/employee/EmployeeHome";
import EmployeeProfile from "./components/employee/EmployeeProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeSignup />} />
        <Route path="/login" element={<EmployeeLogin />} />
        <Route path="/home" element={<EmployeeHome />} />
        <Route path="/profile" element={<EmployeeProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;