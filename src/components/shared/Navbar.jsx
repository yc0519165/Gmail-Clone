import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const Navbar = () => {
  // This state are use to logOut function
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((store) => store.appSlice);

  // This is use to search the email 50% part in navbar
  // and 50% part in message
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  //logOut function
  const singOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  return (
    <div className="flex justify-between items-center mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"}
            alt="gamil"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center rounded-full bg-[#EAF1FB] px-2 py-3">
          <IoIosSearch size={"24px"} />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />{" "}
          <div className="flex items-center px-3 hover:bg-gray-300 rounded-full cursor-pointer">
            <HiOutlineAdjustmentsHorizontal size={"20px"} />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
          <FaRegQuestionCircle size={"24px"} />
        </div>
        <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
          <IoSettingsOutline size={"24px"} />
        </div>
        <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
          <PiDotsNineBold size={"24px"} />
        </div>
        <div className="relative cursor-pointer">
          <Avatar
            onClick={() => setToggle(!toggle)}
            src={user.photoURL}
            googleId="118096717852922241760"
            round={true}
            size={"40px"}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 2, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
              >
                <p onClick={singOutHandler} className="p-2 underline">
                  Logout
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
