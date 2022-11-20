import axios from "axios";
// import { useHistory } from "react-router-dom";
import { API_ENDPOINTS } from "../config/apiEndpoints";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const headers = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      API_ENDPOINTS.Login,
      { email, password },
      {
        headers: headers,
      }
    );
    const { token, ...userData } = data.data;

    localStorage.setItem("token", token);

    dispatch({
      type: "LoginSuccess",
      payload: userData,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });
    dispatch({
      type: "LogoutSuccess",
    });
  } catch (err) {
    dispatch({
      type: "LogoutFailure",
    });
  }
};
