import { IoMdStarOutline } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelected } from "../redux/appSlice";
import { motion } from "framer-motion";

export const Message = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onMailGo = () => {
    dispatch(setSelected(email));
    navigate(`/mail/${email.id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onMailGo}
      className="flex items-center justify-between h-10 border-b border-gray-200 px-6 text-sm gap-8 hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-400">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-400">
          <IoMdStarOutline className="w-5 h-5" />
        </div>
        <div className="font-semibold">
          <h1>{email?.to}</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate text-start inline-block max-w-full">
          {email?.message.slice(0, 100)}...
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <p>
          {new Date(email?.createAt?.seconds * 1000).toUTCString().slice(0, 17)}
        </p>
      </div>
    </motion.div>
  );
};
