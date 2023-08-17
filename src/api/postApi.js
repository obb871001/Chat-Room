import { api, chatApi, chatApiWithoutHeader } from "./api";
import Cookies from "js-cookie";
 
export const actionBackSendMessage = ({ user_id, message, image, mem_id } = {}) => {
  let ouathCookieName = process.env.REACT_APP_CHAT_TYPE === "agent" ? "agentOuath" : "playerOuath";
  return chatApi.post("", {
    // ouath:
    //   process.env.REACT_APP_CHAT_TYPE === "agent"
    //     ? "64be0a7d9811b"
    //     : "64ba3ae689985",
    // csId: process.env.REACT_APP_CHAT_TYPE === "agent" && "1",
    // ouath: Cookies.get("ouath"),
    ouath: Cookies.get(ouathCookieName),
    csId: process.env.REACT_APP_CHAT_TYPE === "agent" && Cookies.get("csId") || "1",
    message: message,
    image: image,
    // user_id: process.env.REACT_APP_CHAT_TYPE === "agent" && user_id,
    user_id: user_id || "1",
    mem_id: mem_id || "1",
  });
};

export const actionBackSendImage = (formData, mem_id) => {
  return chatApiWithoutHeader.post("", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      mem_id: mem_id,
    },
  });
};
