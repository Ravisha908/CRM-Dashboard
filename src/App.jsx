import "./App.css";
import AppContent from "./components/Dashboard/AppContent/AppContent";
import AppLayout from "./Pages/AppLayout";
import Attendance from "./Pages/Attendance";
import Employee from "./Pages/Employee";
import EmployeeListPage from "./Pages/EmployeeListPage";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/app" element={<AppContent />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
          <Route path="/attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
