import message from "../../../../assets/images/app/app-content/message-icon.svg";
import notification from "../../../../assets/images/app/app-content/notification-icon.svg";
import personinfoimg from "../../../../assets/images/app/app-content/person-info-img.png";
import dropdown from "../../../../assets/images/app/app-content/dropdown-icon.svg";

function AppHeaderRight() {
  return (
    <div className="appheader-right">
      <div className="notify-icon ">
        <img
          src={notification}
          alt="Person info image"
          className="notifification-icon"
        />

        <img src={message} alt="Person info image" className="message-icon" />
      </div>
      <div className="person-info">
        <img
          src={personinfoimg}
          alt="Person info image"
          className="personinfo-img"
        />
        <div className="person-name">
          <p>Admirra John</p>
          <img
            src={dropdown}
            alt="Drop down icon"
            className="info-dropdown-img"
          />
        </div>
      </div>
    </div>
  );
}

export default AppHeaderRight;
