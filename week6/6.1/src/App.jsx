import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
let counter = 3;
function App() {
  const [render, setRender] = useState("welcome");
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "learning frontend",
      description: "learning about react hooks",
    },
    {
      id: "2",
      title: "learning frontend",
      description: "learning about react hooks",
    },
    {
      id: "3",
      title: "learning frontend",
      description: "learning about react hooks",
    },
  ]);
  function titleHandeler() {
    const val = Math.random();
    setRender(val);
  }

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodos(data.todos);
        });
    }, 10000);
  },[]);
  function addTodo() {
    const title = Math.random();
    const description = Math.random();
    setTodos([...todos, { id: ++counter, title, description }]);
  }
  return (
    <>
      <button onClick={titleHandeler}>Click Me to change the title</button>
      <Header title={render}></Header>
      <Header title="Harshawardhan"></Header>
      <button onClick={addTodo}>ADD </button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
      <CardWrapper innerComponent={<Card />}></CardWrapper>
    </>
  );
}
// To avoid rerender we can pass the state down i.e not include the state variable in APP.jsx
// pass the state down or use react.memo
// Passing the state down
// function HeaderWithButton(){
//   const [render,setRender]=useState("welcome")
//   function titleHandeler(){
//     const val=Math.random()
//     setRender(val)
//   }
//   return (
//     <>
//         <button onClick={titleHandeler}>Click Me to change the title</button>
//         <Header title={render}></Header>
//     </>
//   )
// }
// using React.memo
const Header = React.memo(function Header({ title }) {
  console.log("Rendering Header with title:", title);
  return <h1>{title}</h1>;
});
function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}
function Card() {
  return (
    <div className="card">
      <h1>TOP</h1>
    </div>
  );
}
function CardWrapper({ innerComponent }) {
  return <div className="hoc-border">{innerComponent}</div>;
}

export default App;
