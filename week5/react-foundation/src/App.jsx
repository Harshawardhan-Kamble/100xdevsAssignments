import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [todos,setTodos]=useState([{
    title:"Coding Frontend",
    description:"practice machine coding questions",
    completed:false
  },{
    title:"Ielts",
    description:"Practice Reading questions",
    completed:false
  },{
    title:"Learning Russian",
    description:"Listening to Russian podcasts",
    completed:false
  },{
    title:"Complete Cohort",
    description:"Complete week 5",
    completed:false
  },{
    title:"complete paytm project",
    description:"practice machine coding questions",
    completed:false
  }
  ,{
    title:"Gym",
    description:"Working out ",
    completed:false
  }
])
function addTodo(){
  setTodos([...todos,{
    title:"new Todo added",
    description:"Added"
  }])
}
  return (
    <>
      <div className="todo-list">
        <button onClick={addTodo}>Add TODO</button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
        {
          todos.map((todo)=>{
            return (<>
              <TodoFunction todo={todo} ></TodoFunction>
              <TodoFunction todo={todo} ></TodoFunction>
            </>
           )
          })
        }
      </div>    </>
  )
}
function TodoFunction({todo}){
  return (
  <div className='todo' >
                <div>{todo.title}</div>
                <div>{todo.description}</div>
  </div>)
}


// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1)
//   }
//   return (
//     <button onClick={onClickHandler}> Count {props.count}</button>
//   )
// }

export default App
