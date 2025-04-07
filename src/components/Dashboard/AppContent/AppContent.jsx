import { useOutletContext } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";
import AppMainContent from "./AppMainContent/AppMainContent";

function AppContent() {
  const { sidebarActive, setSidebarActive } = useOutletContext();
  console.log("appcontent " + sidebarActive);
  return (
    <div className="app-content">
      <AppHeader isSidebar={sidebarActive} setIsSidebar={setSidebarActive} />
      <AppMainContent />
    </div>
  );
}

export default AppContent;
