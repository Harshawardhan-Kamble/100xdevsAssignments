const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    const notification=1+Math.floor(Math.random()*15) 
    const messaging=1+Math.floor(Math.random()*15) 
    const jobs=1+Math.floor(Math.random()*15) 
    const network=1+Math.floor(Math.random()*15) 
    res.json({
        notification,messaging,jobs,network
    })

})
app.listen(3000,()=>{
    console.log("Server Started")
})