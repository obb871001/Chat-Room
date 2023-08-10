import React from "react";
import UseMergeableSearchParams from "../../../../hooks/useMegeableSearchParams";
import { MdArrowBackIosNew } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useSlideContext } from "../../../../SlideContext";

const Header = () => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const searchPlayerUid = searchParams.playerUid;
  const playerId =searchParams.playerId;
  const { setIsSlide } = useSlideContext(); 
  const controls = useAnimation(); // 使用 useAnimation 鉤子

  const handleBackClick = () => {
    console.log("點擊了返回按鈕");
    setIsSlide(false); // 設定滑動狀態為 false，讓 SelectChat 回復原位
    console.log("滑動狀態已設定為 false");
    controls.start({ x: "0%" }); // 設定動畫回到原位
  };
  
  return (
    <section className="absolute top-0 left-0 p-[10px] w-full h-[60px] bg-chat-top-bar z-[1] p-[10px] flex items-center justify-start">
      <div className="mr-2 md:hidden block" onClick={handleBackClick}>
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
