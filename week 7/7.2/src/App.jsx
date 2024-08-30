import {RecoilRoot,useRecoilValue, useSetRecoilState,} from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"
function App() {


  return (
  <RecoilRoot>
    <Count></Count>
    </RecoilRoot>
  )
}
/* Using Context API we haved avoided prop drilling but this Count is rerendering if a button is clicked .
  Note Count is not using any state  but since the parent App renders Count also has to render also we have wrapped th
  Count inside CountContextProvider therefore it renders
  To avoid this we can wrap Count  using react.\\\\\\\\\\\\\\\\\\\\\\\\\\\memo to avoid rerendering or we can use recoil state management library
*/
function Count(){
  console.log("Count render")
  return (
    <>
    <CountRender></CountRender>
    <Buttons></Buttons>
    <IsEven></IsEven>
    </>
  )
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  console.log(even)
  return <div>{even?null:"Even number"}</div>;
} 

function CountRender(){
const count=useRecoilValue(countAtom)
  return <div>{count}</div>
}
function Buttons(){
  // const [count,setCount]=useRecoilState(countAtom)
  const setCount=useSetRecoilState(countAtom)
  console.log("Button Re-rendered")
   return (
    <>
    <button onClick={()=>{setCount(prev=>prev+1)}}>Increment</button>
    <button onClick={()=>{setCount(prev=>prev-1)}}>Decrement</button>
    </>
  )
}
export default App
