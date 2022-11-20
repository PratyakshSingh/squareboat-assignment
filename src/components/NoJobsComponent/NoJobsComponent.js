import React from "react";
import "./NoJobsComponent.css";
import writingIcon from "../../assests/writingIcon.svg";

const NoJobsComponent = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={writingIcon} alt="writing" />
      </div>
      <div className="text">Your posted jobs will show here!</div>
      <div>
        <button className="button">Post a job</button>
      </div>
    </div>
  );
};

export default NoJobsComponent;
