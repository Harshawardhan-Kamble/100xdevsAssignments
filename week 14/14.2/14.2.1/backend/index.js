const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.get("/",(req,res)=>{
    res.json({
        username:"Harshawardhan",
        email:"harshawardhan@mymail.com"
    })
})
app.listen(5555,()=>{
    console.log("Server Started")
})