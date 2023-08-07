import React from "react";
import UseMergeableSearchParams from "../../../../hooks/useMegeableSearchParams";

const Header = () => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const searchPlayerUid = searchParams.playerUid;
  const playerId = searchParams.playerId;

  return (
    <section className="absolute top-0 left-0 p-[10px] w-full h-[60px] bg-chat-top-bar z-[1] p-[10px] flex items-center justify-between">
      <div className="flex flex-col justify-between">
        <p className="mb-0">{playerId || "-"}</p>
        <p className="mb-0 text-light-gray">last seen recently</p>
      </div>
    </section>
  );
};

export default Header;
