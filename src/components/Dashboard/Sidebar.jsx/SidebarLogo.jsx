function SidebarLogo({ setSidebarActive }) {
  function handleCloseSidebar() {
    setSidebarActive((is) => !is);
  }
  return (
    <div className="sidebar-logo">
      <h2>WeHR</h2>
      <div className="sidebarclose-btn" onClick={handleCloseSidebar}>
        X
      </div>
    </div>
  );
}

export default SidebarLogo;
