import React from "react";
import UseMergeableSearchParams from "../../../../hooks/useMegeableSearchParams";
import { MdArrowBackIosNew } from "react-icons/md";

const Header = ({ handleSidebarToggle }) => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const searchPlayerUid = searchParams.playerUid;
  const playerId = searchParams.playerId;

  const handleArrowClick = () => {
    handleSidebarToggle(); // 切換側邊欄的狀態
    setSearchParams((prevParams) => ({
      ...prevParams,
      // 將 isSidebarOpen 設為 false，這樣 SelectChat.js 會往右滑回來
      isSidebarOpen: false,
    }));
  };

  return (
    <section
     className="absolute top-0 left-0 p-[10px] w-full h-[60px] bg-chat-top-bar z-[1] flex items-center justify-start"
    >
        <div className="mr-2 md:hidden block" onClick={handleArrowClick}>
          <MdArrowBackIosNew className="text-lg" />
        </div>

      <div className="flex flex-col justify-between">
        <p className="mb-0">{playerId || "-"}</p>
        <p className="mb-0 text-light-gray">last seen recently</p>
      </div>
    </section>
  );
};

export default Header;
