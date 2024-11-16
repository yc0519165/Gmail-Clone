import { useState } from "react";
import {
  FaCaretDown,
  FaRegWindowMaximize,
  FaUserFriends,
} from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdRefresh,
} from "react-icons/md";
import { Messages } from "./Messages";

const mailType = [
  {
    icon: <FaRegWindowMaximize size={"20px"} />,
    text: "Prmary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Socials",
  },
];

export const Inbox = () => {
  const [emailSlected, setEmailSelected] = useState(0);
  return (
    <div className="flex-1 w-[90%] bg-white rounded-xl mx-3">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1 ">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-gray-400 text-sm ">1-50 of 5003</p>
          <button className="hover:bg-slate-100 rounded-full p-2">
            <MdKeyboardArrowLeft size={"20px"} />
          </button>
          <button className="hover:bg-slate-100 rounded-full p-2">
            <MdKeyboardArrowRight size={"20px"} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, idx) => {
            return (
              <button
                onClick={() => setEmailSelected(idx)}
                key={idx}
                className={`${
                  emailSlected === idx
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-transparent"
                } flex items-center gap-5 p-5 w-52 hover:bg-gray-200`}
              >
                {item.icon}
                <p>{item.text}</p>
              </button>
            );
          })}
        </div>
        <Messages />
      </div>
    </div>
  );
};
