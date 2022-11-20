import axios from "axios";
import { API_ENDPOINTS } from "./apiEndpoints";

export const getJobsByUser = async (pageNum, token) => {
  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const { data } = await axios.get(API_ENDPOINTS.Jobs, {
    headers: headers,
    params: {
      page: pageNum,
    },
  });
  if (data.data) {
    return { data: data.data.data, meta: data.data.metadata };
  } else {
    return { data: [] };
  }
};

export const getApplicationsForJob = async (jobId, token) => {
  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const { data } = await axios.get(
    `${API_ENDPOINTS.GetCandidates}/${jobId}/candidates`,
    {
      headers: headers,
    }
  );
  return data.data;
};

export const getTotalPages = (totalJobs, limitPerPage) => {
  return Math.floor(
    totalJobs / limitPerPage + (totalJobs % limitPerPage ? 1 : 0)
  );
};

export const shortenString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
