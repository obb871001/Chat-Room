import { useEffect } from "react";
import UseMergeableSearchParams from "../../hooks/useMegeableSearchParams";
import Chat from "./components/Chat";
import SelectChat from "./components/selectChat";
import TabBar from "./components/tabBar";
import Cookies from "js-cookie";
import { useLocation } from "react-router";

const Home = () => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const { oauth, csId = "" } = searchParams;
  const ouathCookieName = process.env.REACT_APP_CHAT_TYPE === "agent" ? "agentOuath" : "playerOuath";
  useEffect(() => {
    // Cookies.set("ouath", oauth);
    Cookies.set(ouathCookieName, oauth);
    Cookies.set("csId", csId);
    
    // console.log("最終使用的 ouath Cookie 名稱:", ouathCookieName);
    // console.log("ouath 的值:", oauth);
  }, [oauth, csId]);

  return (
    <section className="w-[1200px] h-screen md:h-[800px] border-0 rounded-xl shadow overflow-hidden flex flex-col">
      <TabBar />
      <section
        className={`md:flex md:h-[775px] h-screen overflow-hidden`}
      >
        {process.env.REACT_APP_CHAT_TYPE === "agent" && <SelectChat />}
        <Chat />
      </section>
    </section>
  );
};

export default Home;
