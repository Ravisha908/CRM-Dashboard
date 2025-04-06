import DashboardHeading from "../AppContent/AppMainContent/Dashboard/DashboardHeading";
import AttendancePageBoxes from "./AttendancePageBoxes";

function AttendanceMainContent() {
  return (
    <div className="employee-main-content">
      <DashboardHeading>Employee</DashboardHeading>
      <AttendancePageBoxes />
    </div>
  );
}

export default AttendanceMainContent;
