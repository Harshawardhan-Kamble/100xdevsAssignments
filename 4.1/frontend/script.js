
function calculateSum(){
    const number1=Number(document.getElementById("number1").value)
    const number2=Number(document.getElementById("number2").value)
    fetch(`http://localhost:3000/sum?a=${number1}&b=${number2} `)
    .then(response=>response.text())
    .then((data)=>{
        const calculate=document.getElementById("calculate")
        calculate.innerHTML=data
    })
}
let timeoutId;
function debouncedCalculateSum() {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    // Set a new timeout
    timeoutId = setTimeout(calculateSum, 1000);
}
    // can use async await
    /* what if i don't need a button and when a user changes the input the result is calculated. WE can use onInput to do it 
    the problem with it is every time a user tries to change the input i.e even a single\\ digit the request is sent i.e 
    if it is 6 digit number on input 1 and 6 digit number on input 2, 12 requests will be sent.\ we don't want that to happen 
    we want to wait till the user completes the number.How to solve this ?? Use debouncing

*/
// setTimeout(calculateSum,3000)


const calculateInterest=async()=>{
    const principal=Number(document.getElementById("principal").value)
    const rate=Number(document.getElementById("rate").value)
    const time=Number(document.getElementById("time").value)
    const response =await fetch(`http://localhost:3000/interest?principal=${principal}&rate=${rate}&time=${time}`)
    const data=await response.text()
    const result =await data
    const interest=document.getElementById("interestContainer")
    interest.innerHTML=result
}
const debouncedCalculateInterest=()=>{
    clearTimeout(timeoutId);
    timeoutId=setTimeout(calculateInterest,1000)
}