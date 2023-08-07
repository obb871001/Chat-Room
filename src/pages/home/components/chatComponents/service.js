import { BiCheck } from "react-icons/bi";
import RightTriangle from "../../../../components/triangle/rightTriangle";
import { transferToHour } from "../../../../utils/transferToHour";

const Service = ({ content, createdTime, messageType }) => {
  return (
    <section className="flex items-end justify-end gap-[5px]">
      <section className="flex items-end justify-end">
        <section className="min-w-[120px] max-w-[70%] bg-self-bg rounded-l-2xl rounded-t-2xl px-[10px] py-[5px]">
          <div className="flex flex-col justify-between items-start">
            {messageType === "text" ? (
              <p className="mb-0 break-all">{content}</p>
            ) : (
              <img src={`..${content}`} />
            )}
            <div className="text-light-gray text-xs mb-0 flex justify-end items-center gap-[3px] whitespace-nowrap w-full">
              <p className="text-light-gray text-xs mb-0 whitespace-pre">
                {transferToHour(createdTime)}
              </p>

              {/* <p className="mb-0">{transferToHour("2023-07-05 10:38:22")}</p> */}
              <span>
                {" "}
                <BiCheck className="text-lg" />
              </span>
            </div>
          </div>
        </section>
        <RightTriangle />{" "}
      </section>
    </section>
  );
};

export default Service;
