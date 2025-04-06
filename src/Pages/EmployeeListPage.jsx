import AppHeader from "../components/Dashboard/AppContent/AppHeader/AppHeader";
import EmployeeHeader from "../components/Dashboard/EmployeePage/EmployeeHeader/EmployeeHeader";
import EmployeeListContent from "../components/Dashboard/EmployeePage/EmployeeListContent";
import EmployeeMainContent from "../components/Dashboard/EmployeePage/EmployeeMainContent";

function EmployeeListPage() {
  return (
    <div className="employee-page app-content">
      <EmployeeHeader />
      <EmployeeListContent />
    </div>
  );
}

export default EmployeeListPage;
