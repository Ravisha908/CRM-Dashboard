import { NavLink } from "react-router-dom";

function EmployeePageBoxes() {
  return (
    <div className="employee-page-boxes">
      <div className="employeepage-box">
        <NavLink to="/employee-list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M26.6667 35V31.6667C26.6667 29.8986 25.9643 28.2029 24.7141 26.9526C23.4638 25.7024 21.7681 25 20 25H8.33335C6.56524 25 4.86955 25.7024 3.61931 26.9526C2.36907 28.2029 1.66669 29.8986 1.66669 31.6667V35"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1667 18.3333C17.8486 18.3333 20.8333 15.3486 20.8333 11.6667C20.8333 7.98477 17.8486 5 14.1667 5C10.4848 5 7.5 7.98477 7.5 11.6667C7.5 15.3486 10.4848 18.3333 14.1667 18.3333Z"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.3333 13.3333V23.3333"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.3333 18.3333H28.3333"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Employee</p>
        </NavLink>
      </div>
      <div className="employeepage-box">
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
          >
            <path
              d="M31.2507 1.88501H10.7538V38.74H31.2507V1.88501Z"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M1.81572 38.7356H10.7538L10.7538 14.5244H1.81572L1.81572 38.7356Z"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M31.2508 38.7356H40.1889V14.5244H31.2508L31.2508 38.7356Z"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M16.8002 38.7356H25.2045V26.63H16.8002V38.7356Z"
              fill="white"
              stroke="#BEBEBE"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <p>Org Config</p>
        </NavLink>
      </div>
    </div>
  );
}

export default EmployeePageBoxes;
