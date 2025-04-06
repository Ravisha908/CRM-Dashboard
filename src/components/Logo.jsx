import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <div className="loginlogo-container">
      <img src={logo} alt="CRM Logo" className="login-logoimg" />
      <h2>Our CRM</h2>
    </div>
  );
}

export default Logo;
