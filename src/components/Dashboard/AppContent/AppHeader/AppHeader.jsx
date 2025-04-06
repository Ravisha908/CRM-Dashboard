import AppHeaderRight from "./AppHeaderRight";
import AppHeaderSearchbar from "./AppHeaderSearchbar";

function AppHeader() {
  return (
    <div className="app-header">
      <AppHeaderSearchbar />
      <AppHeaderRight />
    </div>
  );
}

export default AppHeader;
