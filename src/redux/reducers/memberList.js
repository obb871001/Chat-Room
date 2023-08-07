const memberListReducers = (state = [], action) => {
  switch (action.type) {
    case "storeMemberList":
      return action.payload;
    default:
      return state;
  }
};
export default memberListReducers;
