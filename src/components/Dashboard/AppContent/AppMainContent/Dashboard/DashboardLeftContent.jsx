import DashboardAnnouncement from "./DashboardAnnouncement";
import DashboardAttendanceCard from "./DashboardAttendanceCard";
import DashboardHeading from "./DashboardHeading";
import PayRollTaskRequest from "./PayRollTaskRequest";

function DashboardLeftContent() {
  return (
    <div className="dashboard-left-content">
      <DashboardHeading>Dashboard</DashboardHeading>
      <DashboardAttendanceCard />
      <PayRollTaskRequest />
      <DashboardAnnouncement />
    </div>
  );
}

export default DashboardLeftContent;
