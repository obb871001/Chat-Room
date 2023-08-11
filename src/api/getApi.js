import Cookies from "js-cookie";
import { api, chatApi } from "./api";

export const getHistoryFromAgent = ({ user_id } = {}) => {
  return chatApi.get("", {
    params: {
      // ouath:
      //   process.env.REACT_APP_CHAT_TYPE === "agent"
      //     ? "64be0a7d9811b"
      //     : "64ba3ae689985",
      ouath: Cookies.get("ouath"),
      csId: process.env.REACT_APP_CHAT_TYPE === "agent" && Cookies.get("csId") || "1",
      // csId: Cookies.get("csId") || "1",
      // csId:1,
      user_id: process.env.REACT_APP_CHAT_TYPE === "agent" && user_id || "1",
    },
  });
};

export const getMemberList = ({ mem_id } = {}) => {
  return chatApi.get("/member", {
    params: {
      // ouath:
      //   process.env.REACT_APP_CHAT_TYPE === "agent"
      //     ? "64be0a7d9811b"
      //     : "64ba3ae689985",
      ouath: Cookies.get("ouath"),
      mem_id: mem_id,
    },
  });
};
