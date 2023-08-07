import axios from "axios";

const createApi = (baseUrl) => {
  const api = axios.create({
    baseURL: `${
      process.env.REACT_APP_SECRET_TYPE === "local"
        ? "http://127.0.0.1:8000"
        : ".."
    }/api${
      process.env.REACT_APP_CHAT_TYPE === "agent" ? "/admin" : ""
    }/${baseUrl}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );
  return api;
};

const createWithoutHeaderApi = (baseUrl) => {
  const api = axios.create({
    baseURL: `${
      process.env.REACT_APP_SECRET_TYPE === "local"
        ? "http://127.0.0.1:8000"
        : ".."
    }/api/admin/${baseUrl}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  api.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );
  return api;
};

export const api = createApi("");
export const chatApi = createApi("message");
export const chatApiWithoutHeader = createWithoutHeaderApi("message");
