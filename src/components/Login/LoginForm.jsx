import React, { useState } from "react";
import briefcase from "../../assets/images/login/briefcase.svg";
import lock from "../../assets/images/login/lock.svg";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [value, setValue] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    if (value.username === "user" && value.password === "pass") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/app");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="loginform-container">
      <h1 className="login-heading">Sign Into</h1>
      <h2 className="loginsub-heading">Your Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <img src={briefcase} alt="Login Briefcase" />
          <input
            type="text"
            placeholder="Company ID"
            name="username"
            value={value.username}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <img src={lock} alt="Login Briefcase" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
        </div>

        <label className="remember-check">
          <input type="checkbox" required />
          <p>Remember Me</p>
        </label>
        <div className="login-submit">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
