import { useEffect, useMemo, useState } from 'react'

import axios from "axios"

function App() {
  const [selectedId,setSelectedId]=useState(1)
  const [counter,setCounter]=useState(0)
  const [inputValue,setInputValue]=useState(0)
  const memoisedFunction=useMemo(()=>{
    let count=0;
  for(let i=0;i<=inputValue;i++){
    count=count+i
  }
  return count;
  },[inputValue])
  
  const handleChange=(e)=>{
    setInputValue(e.target.value)
  }
  // const [todos,setTodos]=useState([])
  // useEffect(()=>{
  //   fetch("https://sum-server.100xdevs.com/todos")
  //   .then((response)=>response.json())
  //   .then((data)=>setTodos(data.todos))
  //  },[])
  return (
    <> {/* {todos.map((todo,index) =><Todo key={index} title={todo.title} description={todo.description}/>)} */}
    <input type='text'onChange={handleChange} ></input>
    <h3>Sum is {memoisedFunction}</h3>
    <button onClick={()=>setCounter(counter+1)}>Counter-{counter}</button>
<button onClick={()=>setSelectedId(1)}>1</button>
<button onClick={()=>setSelectedId(2)}>2</button>
<button onClick={()=>setSelectedId(3)}>3</button>
<button onClick={()=>setSelectedId(4)}>4</button>
     <TodoId todoId={selectedId}></TodoId>
     <h1>{selectedId}</h1>
    </>
  )
}
function Todo({title,description}){
  return <>
    <h1>{title}</h1>
    <h4>{description}</h4>
    </>
}
function TodoId({todoId}){
  const [todoById,setTodoById]=useState([])
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
    .then(response=>{
      console.log(response.data.todo)
      setTodoById(response.data.todo)
    })},[todoId])
return (
  <>
   <h1>{todoById.title}</h1>
   <h4>{todoById.description}</h4>
  </>
)
}
export default App
