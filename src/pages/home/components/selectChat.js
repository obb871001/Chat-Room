import { useEffect, useState, useRef } from "react";
import SearchBar from "./selectChatComponents/searchBar";
import SelectPlayer from "./selectChatComponents/selectPlayer";
import { getBackendChatRecords } from "../../../api/api";
import { getHistoryFromAgent, getMemberList } from "../../../api/getApi";
import { useDispatch } from "react-redux";
import { storeMemberList } from "../../../redux/action/action";
import CommonPlaceHolder from "../../../components/placeHolder/commonPlaceHolder";
import { motion, useAnimation } from "framer-motion";

const SelectChat = () => {
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [inputStatus,setInputStatus] = useState(false);
  const [isTyping,setIsTyping] = useState(false);
  

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

  
 
  return (
    <section className={`md:w-[350px] w-screen overflow-hidden bg-white h-full border-r shadow py-[20px]`}>
      <SearchBar
        setSearchValue={setSearchValue}
        chatList={chatList}
        setChatList={setChatList}
        setInputStatus={setInputStatus}
        setIsTyping={setIsTyping}
      />
      <section className="overflow-y-scroll h-full no-scrollbar pb-[35px]">
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
        </section>
      </section>
  );
};

export default SelectChat;
