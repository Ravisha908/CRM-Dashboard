import AppHeader from "../components/Dashboard/AppContent/AppHeader/AppHeader";
import EmployeeHeader from "../components/Dashboard/EmployeePage/EmployeeHeader/EmployeeHeader";
import EmployeeMainContent from "../components/Dashboard/EmployeePage/EmployeeMainContent";

function Employee() {
  return (
    <div className="employee-page app-content">
      <EmployeeHeader />
      <EmployeeMainContent />
    </div>
  );
}

export default Employee;
