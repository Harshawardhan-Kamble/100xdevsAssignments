const express=require("express")
const cors=require("cors")
const app =express()
app.use(cors());
app.get("/sum",(req,res)=>{
    const a=Number(req.query.a)
    const b=Number(req.query.b)
    const sum=a+b
    res.send(`Sum is ${sum}`)
})
app.listen("3000",()=>{
    console.log("Server Started on port 3000")
})