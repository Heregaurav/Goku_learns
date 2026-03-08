const {Router} = require("express");
const  adminRouter = Router();
const {AdminModel} = require("../db")

  adminRouter.post("/signup",(req,res)=>{
        res.json({
            message:"this is signup"
        })
  })


   adminRouter.post("/signin",(req,res)=>{
        res.json({
            message:"this is signin"
        })
  })


   adminRouter.post("/course",(req,res)=>{
        res.json({
            message:"this is the course admin post "
        })
    })

   adminRouter.put("/course",(req,res)=>{
        res.json({
            message:"this is the course admin can edit "
        })
   })
   adminRouter.get("/course/bulk",(req,res)=>{
        res.json({
            message:" signup endpoint "
        })


   })

   module.exports = {
        adminRouter : adminRouter
   }
