export const commonHeader = {
  "Content-Type": "application/json",
  Authorization: process.env.REACT_APP_SECRET_KEY,
};

export const API_URL =
  process.env.REACT_APP_SECRET_TYPE === "local"
    ? "http://localhost:80/apifile/API/backend_api.php"
    : "../API/backend_api.php";
