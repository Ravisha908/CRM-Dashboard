import DashboardHeading from "../AppContent/AppMainContent/Dashboard/DashboardHeading";
import EmployeePageBoxes from "./EmployeePageBoxes";

function EmployeeMainContent() {
  return (
    <div className="employee-main-content">
      <DashboardHeading>Employee</DashboardHeading>
      <EmployeePageBoxes />
    </div>
  );
}

export default EmployeeMainContent;
