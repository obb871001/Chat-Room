import { api, chatApi, chatApiWithoutHeader } from "./api";
import Cookies from "js-cookie";

export const actionBackSendMessage = ({ user_id, message, image } = {}) => {
  return chatApi.post("", {
    // ouath:
    //   process.env.REACT_APP_CHAT_TYPE === "agent"
    //     ? "64be0a7d9811b"
    //     : "64ba3ae689985",
    // csId: process.env.REACT_APP_CHAT_TYPE === "agent" && "1",
    ouath: Cookies.get("ouath"),
    csId: process.env.REACT_APP_CHAT_TYPE === "agent" && Cookies.get("csId") || "1",
    message: message,
    image: image,
    user_id: process.env.REACT_APP_CHAT_TYPE === "agent" && user_id,
  });
};

export const actionBackSendImage = (formData) => {
  return chatApiWithoutHeader.post("", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
