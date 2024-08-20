function addTodo(){
    const todo=document.getElementById("todo")
    const title=document.getElementById("title").value
    const description=document.getElementById("description").value
    const p1=document.createElement("p")
    const p2=document.createElement("p")
    p1.innerHTML=title
    p2.innerHTML=description
    const container=document.createElement("div")
    const mark=document.createElement("button")
    mark.innerHTML="Mark As Done"
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(mark)
    mark.addEventListener("click",function(){
        mark.innerHTML=mark.innerHTML==="Mark As Done"?"Done":"Mark As Done"
    })
    todo.appendChild(container)
}
