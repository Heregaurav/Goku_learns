const express = require('express')
const {Router} = require("express");
const  adminRouter = Router();
const mongoose = require("mongoose");
const { AdminModel } = require("../db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "Iamnotgivingup"
const { z }= require("zod")
const bcrypt = require("bcrypt")
adminRouter.use(express.json())


//bcrypt , Zod , jsonwebtoken



adminRouter.post("/signup", async function (req,res){
    
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        lastName: z.string().min(3).max(100),
        firstName:z.string().min(3).max(100),
        password:z.string().min(3).max(100)
    })

    const parsedData =  requiredBody.safeParse(req.body)

    if(!parsedData.success){
        res.json({

            message: "something went wrong",
            error :  parsedData.error

        })

        return 
    }

        const email = req.body.email
        const password = req.body.password
        const lastName = req.body.lastName
        const firstName = req.body.firstName
      
     

        try{
             const hashedPassword = await bcrypt.hash(password,10)
             console.log(hashedPassword)
            
             await AdminModel.create({
                    email :  email,
                    password : hashedPassword,
                    lastName : lastName,
                    firstName : firstName
                })

                res.json({
                    message:"you are signed up"
                })

           }catch(e){
             res.json({
                message: "there is some error"
             })
           }
   })


adminRouter.post("/signin",async function(req,res){

        const requiredBody = z.object({
                email : z.string().min(3).max(100).email()
        })

        const parsedEmail = requiredBody.safeParse(req.body)

        if(!parsedEmail.success){
                res.json({
                    message:"the email format is wrong"
                })
            return
        }

        const email = req.body.email;
        const password = req.body.password;
        
        const response =  await AdminModel.findOne({
            email:email,
            
        })

        if(!response){
           return res.json({
                message:"Admincouldn't found"
            })
        }

        const checkPassword = await bcrypt.compare(password,response.password)
        
        if(checkPassword){
            const token = jwt.sign(
                {id: response._id.toString()},
                JWT_SECRET,
                {expiresIn:'24h'});
            console.log(token)
            return res.json({
              token :token
              })
          }else{
           return res.json({
                message:"wrong credentials/password"
            })
          }

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
