import { useSelector } from "react-redux";
import Arrow from "./chatComponents/Arrow";
import ChatContent from "./chatComponents/chatContent";
import Footer from "./chatComponents/footer";
import Header from "./chatComponents/header";

const Chat = () => {
  const arrayStatus = useSelector((state) => state.isShowArrow);
  const chatTrigger = useSelector(state=>state.chatTrigger);
  
  return (
    <section
      className={`${
        process.env.REACT_APP_CHAT_TYPE === "agent" ? "md:w-[850px] w-screen" : "w-full"
      } overflow-y-hidden h-full bg-cover bg-no-repeat chat-background relative py-[60px]`}
    >
      <Header />
      <ChatContent />
      <Footer />
      {!arrayStatus && <Arrow />}
    </section>
  );
};

export default Chat;
