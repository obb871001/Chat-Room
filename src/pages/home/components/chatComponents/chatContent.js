import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import LeftTriangle from "../../../../components/triangle/leftTriangle";
import Custom from "./custom";
import Service from "./service";
import UseMergeableSearchParams from "../../../../hooks/useMegeableSearchParams";
import {
  transferToDay,
  transferToMonth,
  transferToYearMonthDay,
} from "../../../../utils/transferToHour";
import DateCard from "./dateCard";
import { getHistoryFromAgent } from "../../../../api/getApi";
import Arrow from "./Arrow";
import { useDispatch } from "react-redux";
import { hiddenArrow, showArrow } from "../../../../redux/action/action";

const ChatContent = () => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const searchPlayerUid = searchParams.playerUid;
  const playerId = searchParams.playerId;
   const endOfMessageRef = useRef(null);
  const windowY = useRef(null);

  const dispatch = useDispatch();

  const scrollToBottom = () => {
    endOfMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const trigger = useSelector((state) => state.trigger);

  const [messageList, setMessageList] = useState([]);
  const [prevMessageList, setPrevMessageList] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (windowY.current) {
        const { scrollTop, clientHeight, scrollHeight } = windowY.current;
        //scrollHeight: 全部高度
        //scrollTop: 滚动条高度
        //clientHeight: 可視區
        const distanceToBottom = scrollHeight - scrollTop - clientHeight;

        if (distanceToBottom < 200) {
          dispatch(showArrow());
        } else {
          dispatch(hiddenArrow());
        }
      }
    };

    const scrollContainer = windowY.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    getHistoryFromAgent({ user_id: Number(searchPlayerUid) })
      .then((data) => {
        if (process.env.REACT_APP_CHAT_TYPE === "agent") {
          setSearchParams({ playerId: data.data[0].user_name });
        }
        setMessageList(data.data.reverse());
      })
      .finally(() => {});
  }, [searchPlayerUid, trigger]);

  useEffect(() => {
    const fetchHistoryFromAgent = () => {
      getHistoryFromAgent({ user_id: Number(searchPlayerUid) }).then((data) => {
        setMessageList(data.data.reverse());
      });
      };

    fetchHistoryFromAgent();

    const intervalId = setInterval(() => fetchHistoryFromAgent(), 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [searchPlayerUid]);

  const chatArray = useMemo(() => {
    if (messageList.length === 0) return [];
    return messageList.reduce((acc, cur, index, arr) => {
      if (
        index > 0 &&
        transferToYearMonthDay(arr[index].date) !==
          transferToYearMonthDay(arr[index - 1].date)
      ) {
        acc.push({
          month: transferToMonth(cur.date),
          date: transferToDay(cur.date),
          from: "date",
          type: "date",
        });
      }
      acc.push(cur);
      return acc;
    }, []);
  }, [messageList]);

  useEffect(() => {
    if (JSON.stringify(messageList) !== JSON.stringify(prevMessageList)) {
      scrollToBottom();
    }
    setPrevMessageList(messageList);
  }, [chatArray, trigger, messageList, prevMessageList]);

  useEffect(() => {
    scrollToBottom();
  }, [trigger]);

  return (
    <section
      ref={windowY}
      className="w-full h-full overflow-y-scroll p-[10px] z-[2] relative flex flex-col gap-[10px]"
    >
      {chatArray?.map((message) => {
        switch (message.from) {
          case "cs":
            return process.env.REACT_APP_CHAT_TYPE === "agent" ? (
              <Service
                key={message.id}
                content={message.message}
                createdTime={message.date}
                messageType={message.type}
              />
            ) : (
              <Custom
                key={message.id}
                content={message.message}
                createdTime={message.date}
                player={message.user_name}
                messageType={message.type}
              />
            );
          case "member":
            return process.env.REACT_APP_CHAT_TYPE === "agent" ? (
              <Custom
                key={message.id}
                content={message.message}
                createdTime={message.date}
                player={message.user_name}
                messageType={message.type}
              />
            ) : (
              <Service
                key={message.id}
                content={message.message}
                createdTime={message.date}
                messageType={message.type}
              />
            );
          case "date":
            return <DateCard month={message.month} date={message.date} />;
          default:
            return (
              <Custom
                key={message.id}
                content={message.message}
                createdTime={message.date}
                player={playerId}
              />
            );
        }
      })}
      <div ref={endOfMessageRef}></div>
    </section>
  );
};

export default ChatContent;
