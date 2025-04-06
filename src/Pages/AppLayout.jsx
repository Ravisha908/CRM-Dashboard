import { Outlet } from "react-router-dom";
import AppContent from "../components/Dashboard/AppContent/AppContent";
import Sidebar from "../components/Dashboard/Sidebar.jsx/Sidebar";

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <Outlet />
      {/* <AppContent /> */}
    </div>
  );
}

export default AppLayout;
