import { useState } from "react";
import { announcement } from "../../../../../utils/announcement";
import announcementMenu from "../../../../../assets/images/app/app-content/announcement-menu-icon.svg";
function DashboardAnnouncement() {
  const [annDate, setAnnDate] = useState("01-03-2025");

  return (
    <div className="dashboard-announcement">
      <div className="announcement-header">
        <div className="announcement-heading">
          <h3>Announcement</h3>
        </div>
        <div className="announcement-datepicker">
          <select
            name="announcement"
            value={annDate}
            onChange={(e) => {
              setAnnDate(e.target.value);
            }}
          >
            {announcement.map((data, index) => (
              <option value={data.date} key={index}>
                {data.date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="announcement-body">
        {announcement.map((data, index) => (
          <div className="announcement-box" key={index}>
            <div className="announcement-boxleft">
              <h4>{data.title}</h4>
              <p>{data.time}</p>
            </div>
            <div className="announcement-boxright">
              <img src={announcementMenu} alt="" key={index} />
            </div>
          </div>
        ))}
      </div>
      <div className="announcement-footer">
        <button className="annouuncement-footer-btn">
          See All Announcement
        </button>
      </div>
    </div>
  );
}

export default DashboardAnnouncement;
