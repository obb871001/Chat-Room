const arrowStatusReducers = (state = false, action) => {
  switch (action.type) {
    case "showArrow":
      return (state = true);
    case "hiddenArrow":
      return (state = false);
    default:
      return state;
  }
};
export default arrowStatusReducers;
