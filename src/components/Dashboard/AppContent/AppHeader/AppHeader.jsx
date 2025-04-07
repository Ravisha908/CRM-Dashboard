import AppHeaderRight from "./AppHeaderRight";
import AppHeaderSearchbar from "./AppHeaderSearchbar";

function AppHeader({ isSidebar, setIsSidebar }) {
  return (
    <div className="app-header">
      <AppHeaderSearchbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <AppHeaderRight />
    </div>
  );
}

export default AppHeader;
