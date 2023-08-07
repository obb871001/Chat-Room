import React from "react";

const TabCircle = ({ backgroundColor }) => {
  return (
    <div
      className="w-[12px] h-[12px] rounded-full cursor-pointer"
      style={{ backgroundColor: backgroundColor }}
    ></div>
  );
};

export default TabCircle;
