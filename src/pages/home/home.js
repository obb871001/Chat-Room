import { useEffect } from "react";
import UseMergeableSearchParams from "../../hooks/useMegeableSearchParams";
import Chat from "./components/Chat";
import SelectChat from "./components/selectChat";
import TabBar from "./components/tabBar";
import Cookies from "js-cookie";
import { useLocation } from "react-router";

const Home = () => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();
  const { oauth, csId } = searchParams;
  useEffect(() => {
    Cookies.set("ouath", oauth);
    Cookies.set("csId", csId);
  }, [oauth, csId]);

  return (
    <section className="w-[1200px] h-screen md:h-[800px] border-0 rounded-xl shadow overflow-hidden flex flex-col">
      <TabBar />
      <section
        className={`flex h-[calc( 100vh - 120px)] md:h-[775px] overflow-hidden`}
      >
        {process.env.REACT_APP_CHAT_TYPE === "agent" && <SelectChat />}
        <Chat />
      </section>
    </section>
  );
};

export default Home;
