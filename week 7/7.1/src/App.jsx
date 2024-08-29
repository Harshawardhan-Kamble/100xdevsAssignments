import  React,{ useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  console.log("app rendered")
  return (
    <CountContext.Provider value={{count,setCount}}>
      <Count  />
    </CountContext.Provider>
  );
}
// if react memo is not used count rerenders 
const Count = React.memo(() => {
  console.log("rerendered")
  return (
    <>
      <CountRender></CountRender>
      <Buttons  />
    </>
  );
});
const CountRender = () => {
  const {count} = useContext(CountContext);
  return <div>{count}</div>;
};

const Buttons = () => {
  const {count,setCount} = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
