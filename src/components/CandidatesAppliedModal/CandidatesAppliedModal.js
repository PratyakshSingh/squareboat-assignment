import React, { useEffect, useState } from "react";
import { getApplicationsForJob } from "../../config/utils";
import CandidateCard from "../CandidateCard/CandidateCard";
import "./CandidatesAppliedModal.css";
// import closeButtonImage from "../../assests/closeButtonImage.svg";

const CandidatesAppliedModal = ({ onClose, jobId }) => {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState();

  const dataAuth = localStorage.getItem("auth-user");

  const data = JSON.parse(dataAuth);
  const token = data.token;

  useEffect(() => {
    const fetchCandidatesApplied = async () => {
      if (!jobId) return;
      try {
        setLoading(true);
        const data = await getApplicationsForJob(jobId, token);
        setCandidates(data);
        setLoading(false);
      } catch (err) {
        console.error(err.response.data.message || "something went wrong");
      }
    };
    if (jobId) fetchCandidatesApplied();
  }, [jobId, token]);

  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="modal_heading">
          <span>Applications for this Job</span>
          <div onClick={onClose}>X</div>
        </div>
        <hr />
        <div className="modal_summary">
          Total {candidates ? candidates.length : 0} candidates
        </div>
        <div className="modal_details">
          {!loading && (!candidates || candidates.length === 0) && (
            <div className="modal_details--empty">
              <span className="empty_text">No applications available!</span>
            </div>
          )}
          {!loading &&
            candidates &&
            candidates.length &&
            candidates.map((candidate) => (
              <CandidateCard key={candidate.id} {...candidate} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatesAppliedModal;
