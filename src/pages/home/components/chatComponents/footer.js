import { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";

import UseMergeableSearchParams from "../../../../hooks/useMegeableSearchParams";
import {
  actionBackSendImage,
  actionBackSendMessage,
} from "../../../../api/postApi";
import { trigger } from "../../../../redux/action/action";

const iconStyle = "text-3xl cursor-pointer";

const Footer = () => {
  let [searchParams, setSearchParams] = UseMergeableSearchParams();

  const dispatch = useDispatch();

  const searchPlayerUid = searchParams.playerUid;
  const playerId = searchParams.playerId;

  const [input, setInput] = useState("");

  const handleSend = () => {
    actionBackSendMessage({
      message: input,
      image: null,
      user_id: searchPlayerUid,
    })
      .then((data) => {
        dispatch(trigger());
        setInput("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleUploadFile = (e) => {
    const formData = new FormData();
    formData.append("ouath", "64be0a7d9811b");
    formData.append("csId", "1");
    formData.append("message", null);
    formData.append("image", e.target.files?.[0]);
    formData.append("user_id", searchPlayerUid);
    actionBackSendImage(formData)
      .then((data) => {
        dispatch(trigger());
        setInput("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <section className="absolute bottom-0 w-full h-[60px] bg-chat-top-bar z-[1] px-[10px] py-[5px] text-light-gray text-xl flex items-center gap-[10px]">
      <div className="relative cursor-pointer w-[26px] h-[26px]">
        <AiOutlinePaperClip className={iconStyle} />
        <input
          onChange={handleUploadFile}
          type="file"
          className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          id="file"
        />
      </div>{" "}
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        transparent
        placeholder="Broadcast a message..."
        className="w-full"
        onKeyPress={handleKeyPress}
      />
      <IoSend
        onClick={handleSend}
        className={`${iconStyle} transition duration-500 ${
          input && "text-send-color"
        }`}
      />
    </section>
  );
};

export default Footer;
