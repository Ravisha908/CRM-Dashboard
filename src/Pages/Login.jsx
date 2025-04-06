import { useEffect } from "react";
import LoginLeft from "../components/Login/LoginLeft";
import LoginRight from "../components/Login/LoginRight";

function Login() {
  useEffect(() => {
    alert("Company Id: user\n Password: pass");
  }, []);
  return (
    <div className="login">
      <LoginLeft username={"user"} password={"pass"} />
      <LoginRight />
    </div>
  );
}

export default Login;
