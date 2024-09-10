
import Header from "./components/Header";
import Revenue from "./components/Revenue";
import SideBar from "./components/SideBar";
import "./index.css";
function App() {
  const data = [
    {
      title: "Next Payout",
      payment: "₹2312.23",
      orders: "23 Orders",
    },
    {
      title: "Amount Pending",
      payment: "₹92,312.20",
      orders: "13 Orders",
    },
    {
      title: "Amount Processed",
      payment: "₹23,92,312.19",
    },
  ];
  return (
    <>
    <div className="flex">
      <SideBar></SideBar>
      <Header></Header>
    </div>  
    <Revenue data={data}></Revenue>
    </>
  );
}
export default App;
