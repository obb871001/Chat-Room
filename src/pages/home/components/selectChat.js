import { useEffect, useState, useRef } from "react";
import SearchBar from "./selectChatComponents/searchBar";
import SelectPlayer from "./selectChatComponents/selectPlayer";
import { getBackendChatRecords } from "../../../api/api";
import { getHistoryFromAgent, getMemberList } from "../../../api/getApi";
import { useDispatch } from "react-redux";
import { storeMemberList } from "../../../redux/action/action";
import CommonPlaceHolder from "../../../components/placeHolder/commonPlaceHolder";
import { motion, useAnimation } from "framer-motion";
import Header from "./chatComponents/header";

const SelectChat = () => {
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [inputStatus,setInputStatus] = useState(false);
  const [isTyping,setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };
  
  const dispatch = useDispatch();
  const controls = useAnimation(); // 移動動畫效果控制
  const containerRef = useRef(null);

  useEffect(() => {
    // setLoading(true);
    getMemberList({
      mem_id: searchValue,
    })
      .then((data) => {
        setChatList(data.data.list);
        dispatch(storeMemberList(data.data.list));
      })
      .finally(() => {
        // setLoading(false);
      });
  }, [searchValue]);

  useEffect(()=>{
    if(isTyping){
      setLoading(true)
    }else{
      setLoading(false)
    }
  },[isTyping])
  

  useEffect(() => {
    const fetchMemberList = (initialLoad = false) => {
      if (initialLoad) {
        setLoading(true);
      }
       getMemberList({
        mem_id: searchValue,
      })
        .then((data) => {
          setChatList(data.data.list);
          dispatch(storeMemberList(data.data.list));
        })
        .finally(() => {
          if (initialLoad) {
            setLoading(false);
          }
        });
    };
    if(inputStatus){
      return;
    }else{
      fetchMemberList(true);
    }

    const intervalId = setInterval(() => fetchMemberList(), 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [inputStatus]);

  const handleSelectPlayerClick = () => { // 點擊 SelectPlayer時觸發動畫
    if (containerRef.current.offsetWidth === window.innerWidth) {
      controls.start({ x: "-100%" });
      setIsSidebarOpen(true);
    }
  };

  const isFullWidth = containerRef.current?.offsetWidth === window.innerWidth;
  const containerClassName = `md:w-[350px] w-screen overflow-hidden bg-white h-full border-r shadow py-[20px] ${
    isFullWidth ? "absolute z-10" : ""
  }`;
  //檢查 containerRef.current?.offsetWidth 是否等於 window.innerWidth，然後根據這個條件來動態生成 containerClassName。如果符合條件，則添加 "absolute z-10" 樣式，否則為空。

  
 
  return (
    <motion.section
      ref={containerRef}
      className={containerClassName}
      initial={{ x: 0 }}
      animate={controls}
    >
      
      {/* <Header
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      /> */}
      <SearchBar
        setSearchValue={setSearchValue}
        chatList={chatList}
        setChatList={setChatList}
        setInputStatus={setInputStatus}
        setIsTyping={setIsTyping}
      />
      <motion.section
        className="overflow-y-scroll h-full no-scrollbar pb-[35px]"
        onClick={handleSelectPlayerClick}
      >
        <CommonPlaceHolder className="mx-[10px]" loading={loading}>
          {chatList?.map((list) => {
            return (
              <SelectPlayer
                key={list.uid}
                playerUid={list.uid}
                player={list.memId}
                created={list.created_at}
                message={list.message}
                type={list.type}
               />
            );
          })}
        </CommonPlaceHolder>
        </motion.section>
      </motion.section>
  );
};

export default SelectChat;
