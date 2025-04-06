import AppHeader from "../components/Dashboard/AppContent/AppHeader/AppHeader";
import AttendanceMainContent from "../components/Dashboard/AttendancePage/AttendanceMainContent";
import EmployeeHeader from "../components/Dashboard/EmployeePage/EmployeeHeader/EmployeeHeader";

function Attendance() {
  return (
    <div className="employee-page app-content">
      <EmployeeHeader />
      <AttendanceMainContent />
    </div>
  );
}

export default Attendance;
