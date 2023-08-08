import { combineReducers } from "redux";
import triggerReducers from "./trigger";
import memberListReducers from "./memberList";
import arrowStatusReducers from "./showArrow";
import chatTriggerReducers from "./chatTrigger";
const AllReducers = combineReducers({
  trigger: triggerReducers,
  memberChatList: memberListReducers,
  isShowArrow: arrowStatusReducers,
  chatTrigger:chatTriggerReducers
});

export default AllReducers;
