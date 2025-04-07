import { Outlet } from "react-router-dom";
import AppContent from "../components/Dashboard/AppContent/AppContent";
import Sidebar from "../components/Dashboard/Sidebar.jsx/Sidebar";
import { useEffect, useState } from "react";

function AppLayout() {
  const [sidebarActive, setSidebarActive] = useState("false");
  useEffect(() => {
    setSidebarActive(false);
  }, []);
  return (
    <div className="app-layout">
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
      <Outlet context={{ sidebarActive, setSidebarActive }} />
      {/* <AppContent /> */}
    </div>
  );
}

export default AppLayout;
