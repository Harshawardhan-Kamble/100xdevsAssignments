import Table from "./Table"

const Revenue = ({ data }) => {

    return (
        <div className="">
        <div className="absolute top-24 left-60   "  >
        <div className="text-xl font-medium ml-4" >Overview</div>
        <div className="flex ">
        {
            data.map((individual,index) => {
                return (
                    <div key={index} className="shadow-md m-6 h-32 p-4  w-80">
                        <p>{individual.title}</p>
                        <div className="mt-8 flex justify-between">
                            <div className="font-bold text-2xl ">{individual?.payment}</div>
                            <div className="ml-4 underline text-blue-700">{individual?.orders}</div>
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