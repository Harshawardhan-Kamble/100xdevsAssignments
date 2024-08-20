function addToDo(){
    const state=[{
    title:"Frontend ",
    description:"Make a react website"
    },{
    title:"BAckend",
    description:"Make a server website"
    },{
    title:"Frontend ",
    description:"Make a react website"
    },{
    title:"Frontend ",
    description:"Make a react website"
    }]
    for(let i=0;i<(state.length);i++){
        console.log(i)
        const title=state[i].title
        console.log(title)
    const description=state[i].description
    const todo=document.getElementById("todo")
    const titlePara=document.createElement("p")
    const descPara=document.createElement("p")
    titlePara.innerHTML=title
    descPara.innerHTML=description
    todo.appendChild(titlePara)
    todo.appendChild(descPara)
    const checkBtn=document.createElement("button")
    checkBtn.innerHTML="mark As done"
    todo.appendChild(checkBtn)

    }
}
