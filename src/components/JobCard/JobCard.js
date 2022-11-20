import React from "react";
import "./JobCard.css";
import { shortenString } from "../../config/utils";

const JobCard = (props) => {
  const { title, description, location, onOpenModal } = props;
  return (
    <div className="job_card">
      <div className="job_title">{shortenString(title, 6)}</div>
      <div className="job_description">{shortenString(description, 20)}</div>
      <div className="location">
        <span>{shortenString(location.toUpperCase(), 10)}</span>
      </div>
      <button onClick={onOpenModal}>View Applications</button>
    </div>
  );
};

export default JobCard;
