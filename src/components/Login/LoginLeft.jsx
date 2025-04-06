import Logo from "../Logo";
import LoginForm from "./LoginForm";

function LoginLeft({ username, password }) {
  return (
    <div className="loginleft-section">
      <div className="loginleft-content">
        <Logo />
        <LoginForm username={username} password={password} />
      </div>
    </div>
  );
}

export default LoginLeft;
