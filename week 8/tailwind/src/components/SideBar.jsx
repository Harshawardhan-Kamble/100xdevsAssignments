import nishyan from "../assets/nishyan.png";
import { FaAngleDown, FaHome, FaBox, FaShoppingCart, FaTruck, FaChartLine, FaDollarSign, FaTag, FaUsers, FaPaintBrush, FaPlug } from "react-icons/fa";
import {BiWallet} from "react-icons/bi"
const SideBar = () => {

const buttonData = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaShoppingCart />, label: "Orders" },
  { icon: <FaBox />, label: "Products" },
  { icon: <FaTruck />, label: "Delivery" },
  { icon: <FaChartLine />, label: "Marketing" },
  { icon: <FaDollarSign />, label: "Analytics" },
  { icon: <FaTag />, label: "Payouts" },
  { icon: <FaUsers />, label: "Discounts" },
  { icon: <FaPaintBrush />, label: "Appearance" },
  { icon: <FaPlug />, label: "Plugins" },
];

  return (
    <div className="fixed">    <div className="w-60 relative h-screen bg-slate-900 text-white  ">
      <div className="flex justify-between ml-5 mb-5 mr-5">
        <div className="flex gap-4 mt-2">
          <div>
            <img src={nishyan} className="w-12 h-10 mt-1" alt="logo" width="50px" />
          </div>
          <div>
            <h2>Nishyan</h2>
            <p className="underline text-sm cursor-pointer text-gray-400">Visit Store</p>
          </div>
        </div>
        <div className="mt-5 text-2xl">
          <FaAngleDown />
        </div>
      </div>
      <div className="gap-2.5 flex flex-col items-start ">
      {buttonData.map((button, index) => (
          <div key={index} className="flex items-center gap-2 ml-4  p-1 pl-2  w-48 text-base cursor-pointer rounded-sm hover:bg-gray-500">
            {button.icon}
            <button className="text-left ml-1.5">{button.label}</button>
          </div>
        ))}
        <div  className="flex ml-4 p-2 gap-4 bg-gray-600 rounded-md w-48" >
          <div className="text-2xl mt-2  w-7"><BiWallet /></div>
          <div>
          <p className="text-sm">Available Credits</p>
          <p className="text-lg font-bold">987.50</p>
          </div>
        </div>
          <p className=" ml-2 p-2 text-md   " >Made with &#10084; <a className="underline" href="https://x.com/k_harsh08" target="_blank">Harshwardhan</a></p>
      </div>
    </div>
    </div>

  );
};

export default SideBar;
