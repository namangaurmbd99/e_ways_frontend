import axios from "axios";
import { API_BASE_URL } from "constants/app_constants";
import { auth_token } from "utils/current_user";

const setTokenInHeader = () => {
  axios.defaults.headers.common["Authorization"] = auth_token();
};

const urlPath = (path) => {
  return API_BASE_URL + path;
};

export const get = (path) => {
  setTokenInHeader();

  return axios.get(urlPath(path)).then((response) => {
    return response;
  });
};

export const post = (path, data) => {
  if (path !== "/sessions") {
    setTokenInHeader();
  }

  return axios.post(urlPath(path), data).then((response) => {
    return response;
  });
};