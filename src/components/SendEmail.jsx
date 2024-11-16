import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

export const SendEmail = () => {
  const [formData, setFormDate] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const open = useSelector((store) => store.appSlice.open);
  const displatch = useDispatch();

  const onChangignHandle = (e) => {
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };

  // On submitHandlerr also work to store a data in firebase Database
  const submitHandler = async (e) => {
    e.preventDefault(); //use reload the page
    // console.log(formData);
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createAt: serverTimestamp(),
    });
    // this function are work to refreash the send email popup
    displatch(setOpen(false));
    setFormDate({
      to: "",
      subject: "",
      message: "",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={` ${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => displatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer "
        >
          <RxCross2 size={"15px"} />
        </div>
      </div>
      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col p-3 gap-2"
      >
        <input
          onChange={onChangignHandle}
          value={formData.to}
          name="to"
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <hr />
        <input
          onChange={onChangignHandle}
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <hr />
        <textarea
          onChange={onChangignHandle}
          value={formData.message}
          name="message"
          cols={"30"}
          rows={"10"}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="rounded-full w-fit px-4 py-1 text-white font-medium bg-[#0B57D0]"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
};
