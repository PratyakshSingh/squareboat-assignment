import React, { useRef } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      dispatch({ type: "LoginRequest" });

      const body = {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      };
      const { data } = await axios.post(
        "https://jobs-api.squareboat.info/api/v1/auth/login",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("auth-user", JSON.stringify(data.data));

      const { token, ...userData } = data.data;

      dispatch({ type: "LoginSuccess", payload: userData });

      history.push("/jobs");
    } catch (error) {
      dispatch({ type: "LoginFailure" });
    }
  };

  return (
    <div className="login_outer">
      <div className="login_upper">
        <div className="login_container">
          <span>Login</span>
          <form onSubmit={submitHandler}>
            <label htmlFor="email" className="emailLabel">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              ref={emailInputRef}
              className="emailInput"
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="passwordLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              className="passwordInput"
              placeholder="Enter your password"
            />
            <button type="submit" className="loginButton">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
