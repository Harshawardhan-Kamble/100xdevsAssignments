function calculateSum(){
    const number1=Number(document.getElementById("number1").value)
    const number2=Number(document.getElementById("number2").value)
    fetch(`http://localhost:3000/sum?a=${number1}&b=${number2} `)
    .then(response=>response.text())
    .then((data)=>{
        const calculate=document.getElementById("calculate")
        calculate.innerHTML=data
    })
    // can use async await
}

