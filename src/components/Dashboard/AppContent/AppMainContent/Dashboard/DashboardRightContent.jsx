import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { birthdayPeople } from "../../../../../utils/employee";

const ValuePiece = Date | null;

const Value = ValuePiece | [ValuePiece, ValuePiece];

function DashboardRightContent() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="dashboardright-content">
      <div className="calendar-heading">
        <h3>Calendar</h3>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={value}
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: "short" }).charAt(0)
          }
          prevLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M6 1L1 6L6 11"
                stroke="black"
                strokeWidth="2"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M1 1L6 6L1 11"
                stroke="black"
                strokeWidth="2"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </div>
      <div className="birthday-people">
        <h3 className="birthday-heading">Birthday Calender </h3>
        <div className="birthday-peopleboxes">
          {birthdayPeople.map((data, index) => (
            <div className="birthday-box" key={index}>
              <div className="bday-image">
                <img src={data.image} alt={data.name} />
              </div>
              <h4 className="birthday-people-name">{data.name}</h4>
              <p className="position">{data.position}</p>
              <p className="dob">{data.dob}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardRightContent;
