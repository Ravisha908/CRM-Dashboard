import OtherSidebar from "./OtherSidebar";
import SidebarLogo from "./SidebarLogo";
import SideNavbar from "./SideNavbar";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <SideNavbar />
      <OtherSidebar />
    </div>
  );
}

export default Sidebar;
