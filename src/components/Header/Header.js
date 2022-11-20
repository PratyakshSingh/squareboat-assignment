import React from "react";
import "./Header.css";
import titleImage from "../../assests/MyJobs.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  let history = useHistory();
  const dataAuth = localStorage.getItem("auth-user");
  if (dataAuth) {
    var data = JSON.parse(dataAuth);
  }
  // console.log(data?.token);
  function handleLoginClick() {
    history.push("/login");
  }

  function handleLogout() {
    localStorage.removeItem("auth-user");
    dispatch(logoutUser());
    history.push("/");
  }

  function handleIconClick() {
    history.push("/");
  }

  return (
    <div className="header_top">
      <div className="titleImage" onClick={handleIconClick}>
        <img src={titleImage} alt="" />
      </div>
      {!isAuthenticated && !dataAuth ? (
        <div className="login" onClick={handleLoginClick}>
          <span className="login_text">Login</span>
        </div>
      ) : (
        <div className="profile_button" onClick={handleLogout}>
          <div className="profile_text">
            {data.name.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
