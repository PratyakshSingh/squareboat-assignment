import React, { useEffect, useState } from "react";
import "./JobsPage.css";
import homeIcon from "../../assests/homeIcon.svg";
import { getJobsByUser, getTotalPages } from "../../config/utils";
import JobCard from "../../components/JobCard/JobCard";
import CandidatesAppliedModal from "../../components/CandidatesAppliedModal/CandidatesAppliedModal";

const JobsPage = () => {
  const [loading, setLoading] = useState();
  const [jobs, setJobs] = useState();
  const [paginate, setPaginate] = useState({
    limitPerPage: 1,
    totalJobs: 1,
    currPage: 1,
    totalPages: 1,
  });

  const [modal, setModal] = useState({ open: false, actJobId: "" });

  useEffect(() => {
    const fetchJobsPerPage = async () => {
      try {
        const authData = localStorage.getItem("auth-user");
        if (authData) {
          var resp = JSON.parse(authData);
          var token = resp.token;
        }
        setLoading(true);
        const { data, meta } = await getJobsByUser(paginate.currPage, token);
        if (data.length === 0) {
          setJobs([]);
          setLoading(false);
        }
        setPaginate({
          ...paginate,
          totalJobs: meta.count,
          limitPerPage: meta.limit,
          totalPages: getTotalPages(meta.count, meta.limit),
        });

        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobsPerPage();
  }, [paginate.currPage]);

  return (
    <div className="jobs_outer">
      <div className="jobs_upper">
        <div className="headerIcon">
          <span>
            <img src={homeIcon} alt="home" />
          </span>
          <div className="home-text">Home</div>
        </div>
        <div className="heading">Jobs Posted By You</div>
        <div className="main_content">
          {!loading &&
            jobs &&
            jobs.map((job) => (
              <JobCard
                key={job.id}
                {...job}
                onOpenModal={() => setModal({ open: true, actJobId: job.id })}
              />
            ))}
        </div>

        {!loading && jobs && jobs.length > 0 && (
          <div className="paginate_buttons">
            <button
              onClick={() => {
                if (paginate.currPage > 1) {
                  setPaginate((p) => ({ ...p, currPage: p.currPage - 1 }));
                }
              }}
            >{`<`}</button>
            <div>{paginate.currPage}</div>
            <button
              onClick={() => {
                if (paginate.currPage < paginate.totalPages) {
                  setPaginate((p) => ({ ...p, currPage: p.currPage + 1 }));
                }
              }}
            >{`>`}</button>
          </div>
        )}
      </div>
      {modal.open && (
        <CandidatesAppliedModal
          onClose={() => setModal((s) => ({ ...s, open: false }))}
          jobId={modal.actJobId}
        />
      )}
    </div>
  );
};

export default JobsPage;
