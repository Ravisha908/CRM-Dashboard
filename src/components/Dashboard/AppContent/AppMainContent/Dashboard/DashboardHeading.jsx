import { Children } from "react";

function DashboardHeading({ children }) {
  return (
    <div className="dashboard-heading">
      <h1>{children}</h1>
    </div>
  );
}

export default DashboardHeading;
