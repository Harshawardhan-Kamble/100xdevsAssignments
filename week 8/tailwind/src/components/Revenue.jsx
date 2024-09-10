import Table from "./Table"
import { FaRegCircleQuestion } from "react-icons/fa6";
const Revenue = ({ data }) => {

    return (
        <div className="">
        <div className="absolute top-24 left-60   "  >
        <div className="text-xl font-medium ml-4" >Overview</div>
        <div className="flex ">
        {
            data.map((individual,index) => {
                return (
                    <div key={index} className={`shadow-md m-6 h-32 p-4 rounded-md  w-80 ${individual.title==="Next Payout"?"bg-blue-900 text-white":"bg-white"}  `} >
                        <div className="flex gap-3 ">
                        <p >{individual.title}</p>
                        <FaRegCircleQuestion className="mt-1.5"/>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div className="font-bold text-2xl ">{individual?.payment}</div>
                            <div className={`ml-4 underline cursor-pointer  ${individual?.orders==="23 Orders"?"text-white":"text-blue-900"}  `}>{individual?.orders}</div>
                        </div>
                    </div>
               
                )
            })
        }
        </div>
        <Table></Table>
        </div>
        </div>

    )
}

export default Revenue