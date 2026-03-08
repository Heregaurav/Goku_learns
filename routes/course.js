const express = require("express") //we get express object as the return and it has key called router inside it 
// const Router =  express.Router;
const {Router} = require("express") // both are amme thing 

// function createCourseRoutes(app){
//     app.post("/course/purchase",(req,res)=>{
//         res.json({
//             message:"signup endpoint"
//         })

//   })
//     app.get("/courses/preview",(req,res)=>{
//         res.json({
//             message:"signup endpint"
//         })
//   })
// }
// module.exports={
//     createCourseRoutes : createCourseRoutes
// }
// we wont this ugly way of exporting file , we 
  

//we will return  or export a express router now 




const courseRouter = Router();

    courseRouter.post("/course/purchase",(req,res)=>{
            res.json({
                message:"signup endpoint"
            })

    })


    courseRouter.get("/courses/preview",(req,res)=>{
            res.json({
                message:"signup endpint"
            })

    })

    module.exports ={
        userRouter: userRouter
    }
