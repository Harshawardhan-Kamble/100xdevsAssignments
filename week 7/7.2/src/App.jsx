import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{count,setCount}}>
    <Count></Count>
    </CountContext.Provider>
  )
}
function Count(){
  console.log("Count render")
  return (
    <>
    <CountRender></CountRender>
    <Buttons></Buttons>
    </>
  )
}
function CountRender(){
  const {count}=useContext(CountContext)
  return <div>{count}</div>
}
function Buttons(){
  const {count,setCount}=useContext(CountContext)
   return (
    <>
    <button onClick={()=>{setCount(count +1)}}>Increment</button>
    <button onClick={()=>{setCount(count -1)}}>Decrement</button>
    </>
  )
}
export default App
