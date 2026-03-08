const express = require("express")
const{Router} = require("express")

// function  createUserRoutes(app){
//    app.post("/user/signup",(req,res)=>{
//         res.json({
//             message:"this is signup"
//         })
//   })
//    app.post("/user/signin",(req,res)=>{
//         res.json({
//             message:"this is signin"
//         })
//   })
//     app.get("/user/purshases",(req,res)=>{
//    })

// }
// module.exports={
//     createUserRoutes : createUserRoutes
// }

const userRouter = Router();

   userRouter.post("/signup",(req,res)=>{
        res.json({
            message:"this is signup"
        })
  })
   userRouter.post("/signin",(req,res)=>{
        res.json({
            message:"this is signin"
        })
  })
    userRouter.get("/purshases",(req,res)=>{
   })


    module.exports = {
        userRouter: userRouter
    }