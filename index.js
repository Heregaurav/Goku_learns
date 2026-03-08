const express = require("express")
const app = express()
const port = 3000;
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
app.use(express.json())

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"this is signup"
    })
})

app.post("/user/signin",(req,res)=>{
    res.json({
        message:"this is signin"
    })
})

app.post("/login",(req,res)=>{
    res.json({
        message:"this is login"
    })

})


app.get("/user/purshases",(req,res)=>{

})

app.post("/course/purchase",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})

app.get("/courses",(req,res)=>{
    res.json({
        message:"signup endpint"
    })
})



app.listen(port,()=>{
    console.log(`listening to port :${port}`)
})