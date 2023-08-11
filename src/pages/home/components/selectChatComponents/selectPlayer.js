import { Base64 } from "js-base64";
import React from "react";
import { useDispatch } from "react-redux";
import UseMergeableSearchParams from "../../../../hooks/useMegeableSearchParams";
import { openChat } from "../../../../redux/action/action";

const SelectPlayer = ({ player, created, message, from, image, type, playerUid }) => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const searchPlayerUid = searchParams.playerUid;

  const dispatch = useDispatch();
  const isMember = from === "member"; // 判斷from內容是否為 member
  const isImage = image === "image"; // 判斷image內容是否為 image

  return (
    <div
      className={`h-[70px] px-[20px] py-[5px] flex items-center gap-[5px]  cursor-pointer bg-white hover:bg-select-tab ${
        searchPlayerUid == playerUid && "!bg-select-tab"
      } ${isMember ? "!bg-[#fcf6bc]" : ""}`}
      onClick={() =>
       { setSearchParams({ playerUid: playerUid, playerId: player});
        dispatch(openChat())
       }
      }
    >
      <div className="max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px] rounded-full bg-black flex items-center justify-center">
        <p className="text-white text-lg">{player[0]}</p>
      </div>
      <div className="flex flex-col w-full justify-around h-full overflow-hidden">
        <div className="flex items-center justify-between text-tab-title font-bold">
          <p className="mb-0 truncate">{player}</p>
          <p>{created}</p>
        </div>
        <div className="text-light-gray font-bold text-overflow max-w-[85%]">
          {isImage ? "[image]" : message}
        </div>
      </div>
    </div>
  );
};

export default SelectPlayer;
