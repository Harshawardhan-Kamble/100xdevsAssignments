import { IoSearch } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="fixed z-30 w-11/12 ml-60 bg-white">
      <div className="flex justify-between   h-20 p-4 border-b-2 ">
        <div className="flex ">
          <span className="text-xl  ">Payouts</span>
          <FaRegCircleQuestion className="m-2 "></FaRegCircleQuestion>
          <span className="text-xs text-gray-500 mt-2">How it works</span>
        </div>
        <div className="flex gap-1 ">
          <div className=" relative ">
            <IoSearch className="absolute left-3 mt-3 " />
          </div>
          <div>
            <input
              className="w-96 h-10 pl-8 focus:outline-none bg-gray-200 rounded-sm"
              type="text"
              placeholder="Search features,tutorials,etc"
            />
          </div>
        </div>
        <div className="flex mr-32 gap-2 ">
          <RiMessage2Line className="text-4xl ml-36 p-1 bg-gray-200 rounded-full cursor-pointer"></RiMessage2Line>
          <IoMdArrowDropdown className="text-4xl p-1 bg-gray-200 rounded-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
