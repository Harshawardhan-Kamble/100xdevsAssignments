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
/* Using Context API we haved avoided prop drilling but this Count is rerendering if a button is clicked .
  Note Count is not using any state  but since the parent App renders Count also has to render also we have wrapped th
  Count inside CountContextProvider therefore it renders
  To avoid this we can wrap Count  using react.memo to avoid rerendering or we can use recoil state management library
*/
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
