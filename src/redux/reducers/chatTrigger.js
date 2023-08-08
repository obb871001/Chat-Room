const chatTriggerReducers = (state = false, action) => {
    switch (action.type) {
      case "openChat":
        return (state = true);
      case "closeChat":
        return (state = false);
      default:
        return state;
    }
  };
  export default chatTriggerReducers;
  