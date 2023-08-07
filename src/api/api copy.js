import axios from "axios";
import { API_URL, commonHeader } from "./apiConfig";

const api = axios.create({
  baseURL: API_URL,
  headers: commonHeader,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 在这里处理错误
    console.error(error);
    return Promise.reject(error);
  }
);

//API類別-> action(動作) get(獲得) post(新增) put(修改) delete(刪除)

export function getBackendChatRecords({ mem_id } = {}) {
  return api.post("/", {
    method: "getMessageHistoryMemberList",
    oauth: "6d4a39d4b2a574f932a5c0a982c8595c",
    mem_id: mem_id,
  });
}

export function getPlayerHistory({ user_id, message_history_id } = {}) {
  return api.post("/", {
    method: "getMessageHistory",
    oauth: "6d4a39d4b2a574f932a5c0a982c8595c",
    message_history_id: message_history_id,
    user_id: user_id,
  });
}

export function backendSendMessage({ message, image, user_id } = {}) {
  return api.post("/", {
    method: "addMessage",
    oauth: "6d4a39d4b2a574f932a5c0a982c8595c",
    message: message,
    image: image,
    user_id: user_id,
  });
}
