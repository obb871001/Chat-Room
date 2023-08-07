import { combineReducers } from "redux";
import triggerReducers from "./trigger";
import memberListReducers from "./memberList";
import arrowStatusReducers from "./showArrow";
const AllReducers = combineReducers({
  trigger: triggerReducers,
  memberChatList: memberListReducers,
  isShowArrow: arrowStatusReducers,
});

export default AllReducers;
