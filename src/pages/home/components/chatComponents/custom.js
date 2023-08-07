import React from "react";
import LeftTriangle from "../../../../components/triangle/leftTriangle";
import { transferToHour } from "../../../../utils/transferToHour";
import Logo from "../../../../assets/images/logo.png";

const Custom = ({ content, player, createdTime, messageType }) => {
  return (
    <section className="flex items-end gap-[5px]">
      <div
        className="max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px] bg-black bg-center rounded-full flex items-center justify-center"
        style={{
          backgroundImage:
            process.env.REACT_APP_CHAT_TYPE === "member"
              ? `url(${Logo})`
              : "#000",
        }}
      >
        {process.env.REACT_APP_CHAT_TYPE === "agent" && (
          <p className="text-white">{player[0]}</p>
        )}
      </div>
      <section className="flex items-end">
        <LeftTriangle />
        <section className="min-w-[120px] max-w-[70%] bg-white rounded-r-2xl rounded-t-2xl px-[10px] py-[5px] flex flex-col justify-between gap-[5px]">
          <p className="mb-0 font-bold">{player}</p>
          <div className="flex justify-between items-end">
            {messageType === "text" ? (
              <p className="mb-0 break-all">{content}</p>
            ) : (
              <img src={`..${content}`} />
            )}
            <p className="text-light-gray text-xs mb-0 whitespace-pre">
              {transferToHour(createdTime)}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Custom;
