import searchicon from "../../../../assets/images/app/app-content/search-icon.svg";

function AppHeaderSearchbar() {
  return (
    <div className="appheader-searchbar">
      <div className="mobile-menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M18 12H0V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z"
            fill="#B2B2B2"
          />
        </svg>
      </div>
      <div className="appheader-search">
        <input type="text" placeholder="Search Employee" />
        <img src={searchicon} alt="Search Employee Icon" />
      </div>
    </div>
  );
}

export default AppHeaderSearchbar;
