function increaseCount(){
    const btn=document.getElementById("btn")
    let count=(btn.innerHTML.split(' ')[1])
    count++;
    btn.innerHTML=`Counter ${count}`
}
