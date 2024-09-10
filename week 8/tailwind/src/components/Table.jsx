
const Table = () => {
  const tabulardata = [
    {
      orderId: "#281209",
      status: "Successful",
      transactionId: "TRX123456",
      refundDate: "Today",
      orderAmount: "₹1125.00",
    },
    {
      orderId: "#281210",
      status: "Processing",
      transactionId: "TRX789012",
      refundDate: "Tomorrow",
      orderAmount: "₹950.50",
    },
    {
      orderId: "#281211",
      status: "Successful",
      transactionId: "TRX345678",
      refundDate: "Yesterday",
      orderAmount: "₹750.00",
    },
    {
      orderId: "#281212",
      status: "Successful",
      transactionId: "TRX901234",
      refundDate: "Today",
      orderAmount: "₹2000.00",
    },
    {
      orderId: "#281213",
      status: "Processing",
      transactionId: "TRX567890",
      refundDate: "Tomorrow",
      orderAmount: "₹1800.00",
    },
    {
      orderId: "#281214",
      status: "Processing",
      transactionId: "TRX098765",
      refundDate: "Yesterday",
      orderAmount: "₹500.00",
    },
    {
      orderId: "#281215",
      status: "Successful",
      transactionId: "TRX456789",
      refundDate: "Today",
      orderAmount: "₹3000.00",
    },
    {
      orderId: "#281216",
      status: "Processing",
      transactionId: "TRX987654",
      refundDate: "Tomorrow",
      orderAmount: "₹1200.00",
    },
    {
      orderId: "#281217",
      status: "Processing",
      transactionId: "TRX654321",
      refundDate: "Yesterday",
      orderAmount: "₹900.00",
    },
    {
      orderId: "#281218",
      status: "Successful",
      transactionId: "TRX234567",
      refundDate: "Today",
      orderAmount: "₹1500.00",
    },
  ];

  return (
    <div className="">
      <table className="min-w-full ml-1.5 bg-white align-middle ">
        <thead>
          <tr className="bg-gray-200 text-gray-700 ">
            <th className="py-2  border-b">Order ID</th>
            <th className="py-2  border-b">Status</th>
            <th className="py-2  border-b">Transaction ID</th>
            <th className="py-2  border-b">Refund Date</th>
            <th className="py-2  border-b">Order Amount</th>
          </tr>
        </thead>
        <tbody>
          {tabulardata.map((data, index) => (
            <tr key={index} >
              <td className="py-2  text-center align-middle border-none">{data.orderId}</td>
              <td className="py-2  text-center align-middle border-none ">
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${data.status==="Successful"?"bg-green-500":"bg-gray-400"}`}></span>
                {data.status}</td> 
              <td className="py-2  text-center align-middle border-none">{data.transactionId}</td>
              <td className="py-2  text-center align-middle border-none">{data.refundDate}</td>
              <td className="py-2  text-center align-middle border-none">{data.orderAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
