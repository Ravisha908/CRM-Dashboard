import OtherSidebar from "./OtherSidebar";
import SidebarLogo from "./SidebarLogo";
import SideNavbar from "./SideNavbar";

function Sidebar({ sidebarActive, setSidebarActive }) {
  return (
    <div
      className={`sidebar ${
        sidebarActive ? "sidebar-active" : "sidebar-inactive"
      }`}
    >
      <SidebarLogo setSidebarActive={setSidebarActive} />
      <SideNavbar />
      <OtherSidebar />
    </div>
  );
}

export default Sidebar;
