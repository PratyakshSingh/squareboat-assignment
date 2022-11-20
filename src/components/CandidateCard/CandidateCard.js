import React from "react";
import { shortenString } from "../../config/utils";
import "./CandidateCard.css";

const CandidateCard = ({ name, skills, email }) => {
  return (
    <div className="candidate_card">
      <div className="candidate_card--sectionOne">
        <div className="candidate_card--icon">
          {name.charAt(0).toUpperCase() || "C"}
        </div>
        <div className="candidate_card--details">
          <div className="candidate_card--name">{name}</div>
          <div className="candidate_card--email">{shortenString(email)}</div>
        </div>
      </div>
      <div className="candidate_card--skills">
        Skills
        <div className="skills_div">{shortenString(skills, 25)}</div>
      </div>
    </div>
  );
};

export default CandidateCard;
