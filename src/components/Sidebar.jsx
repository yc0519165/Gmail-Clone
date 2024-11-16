import { FaRegWindowMaximize } from "react-icons/fa";
import { IoIosArrowDown, IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDrafts, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const sideItems = [
   {
      icon:<FaRegWindowMaximize size={"20px"}/>,
      text:"Index"
   },
   {
      icon:<IoMdStar size={"20px"}/>,
      text:"Starred"
   },
   {
      icon:<MdOutlineWatchLater size={"20px"}/>,
      text:"Snoozed"
   },
   {
      icon:<TbSend2 size={"20px"}/>,
      text:"Send"
   },
   {
      icon:<MdOutlineDrafts size={"20px"}/>,
      text:"Draft"
   },
   {
      icon:<IoIosArrowDown size={"20px"}/>,
      text:"more"
   },
]

export const Sidebar = () => {
   const dispatch = useDispatch();
  return (
    <>
      <div className="w-[15%]">
        <div className="p-3">
          <button onClick={()=> dispatch(setOpen(true))} className="flex items-center gap-3 p-4 rounded-2xl bg-[#C2E7FF] hover:shadow-md">
            <LuPencil size={"20px"} /> Compass
          </button>
        </div>
        <div className="text-gray-500">
         {
            sideItems.map((item, inx)=>{
               return(
                  <div key={inx} className="flex items-center gap-3 p-1 pl-6 hover:bg-[#d3e3fd] rounded-r-full my-2 hover:cursor-pointer">
               {item.icon}
               <p>{item.text}</p>
             </div>
               )
            })
         }
        </div>
      </div>
    </>
  );
};
