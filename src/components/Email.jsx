import { deleteDoc, doc } from "firebase/firestore";
import { BiArchiveIn } from "react-icons/bi";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { motion } from "framer-motion";

export const Email = () => {
  const navigate = useNavigate();

  // param are use to fatch the navigation id, it help to delete the selected id email
  const params = useParams();

  const { selected } = useSelector((store) => store.appSlice);

  // This function are use to delete the mail
  const goOnInbox = () => {
    navigate("/");
  };
  const onDeleteMail = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 bg-white rounded-xl mx-5"
    >
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2 ">
          <div
            onClick={goOnInbox}
            className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"
          >
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdOutlineReport size={"20px"} />
          </div>
          <div
            onClick={() => onDeleteMail(params.id)}
            className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"
          >
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-400 text-sm ">1-50 of 5003</p>
          <button className="hover:bg-slate-100 rounded-full p-2">
            <MdKeyboardArrowLeft size={"20px"} />
          </button>
          <button className="hover:bg-slate-100 rounded-full p-2">
            <MdKeyboardArrowRight size={"20px"} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selected?.subject}</h1>
            <span
              onClick={goOnInbox}
              className="text-sm bg-gray-200 rounded-md px-2  cursor-pointer hover:bg-gray-500"
            >
              inbox
            </span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>
              {new Date(selected?.createAt?.seconds * 1000)
                .toUTCString()
                .slice(0, 17)}
            </p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selected?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selected?.message}</p>
        </div>
      </div>
    </motion.div>
    // " ? " this is a optionChanging to work are not rupture (fatne)
  );
};
