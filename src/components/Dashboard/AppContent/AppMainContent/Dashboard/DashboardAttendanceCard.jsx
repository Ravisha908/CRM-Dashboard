function DashboardAttendanceCard() {
  return (
    <div className="dashboard-attendance-cards">
      <div className="attendance-card leave">
        <h3>Leave Request</h3>
        <h4>04</h4>
      </div>
      <div className="attendance-card attendance">
        <h3>Attendance</h3>
        <h4>10</h4>
      </div>
      <div className="attendance-card total-employees">
        <h3>Total Employees</h3>
        <h4>24</h4>
      </div>
    </div>
  );
}

export default DashboardAttendanceCard;
