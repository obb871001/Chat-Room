import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { trigger } from "../../../../redux/action/action";

const Arrow = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(trigger())}
      className="transition duration-500  flex items-center justify-center absolute border rounded-full bg-white w-[50px] h-[50px] bottom-[100px] right-[30px] z-[9999] cursor-pointer"
    >
      <Icon
        className="!text-3xl !text-[#7e7e7e] !ml-[3px] !mb-[3px]"
        name="angle down"
      />
    </div>
  );
};

export default Arrow;
