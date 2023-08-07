import React from "react";
import { monthToEnglish } from "../../../../utils/transferToHour";

const DateCard = ({ month, date }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="mb-0 rounded-full bg-[rgb(0,0,0,0.4)] text-white font-bold px-[10px] py-[3px]">
        {monthToEnglish(month)} {date}
      </p>
    </div>
  );
};

export default DateCard;
