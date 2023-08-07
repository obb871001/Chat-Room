export const trigger = () => {
  return {
    type: "trigger",
  };
};
export const storeMemberList = (list) => {
  return {
    type: "storeMemberList",
    payload: list,
  };
};
export const showArrow = () => {
  return {
    type: "showArrow",
  };
};
export const hiddenArrow = () => {
  return {
    type: "hiddenArrow",
  };
};
