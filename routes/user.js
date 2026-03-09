const express = require("express")
const{Router} = require("express");
const { UsersModel } = require("../db");
const jwt  = require("jsonwebtoken");
const {z} = require("zod")
const bcrypt = require("bcrypt")
const JWT_SECRET = "Iamnotgivingup"

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

    userRouter.post("/signup",async function(req,res){

        const requiredBody = z.object({
             email:z.string().email().max(100).min(3),
             password:z.string().max(100).min(3),
             firstName:z.string().max(100).min(3),
             lastName:z.string().max(100).min(3)
        })


        const parsedData = requiredBody.safeParse(req.body)


        if(!parsedData.success){
            return res.json({
                message:"invalid data",
                error : parsedData.error
            })
        }

        const email = req.body.email;
        const password  = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        try {
                const hashedpassword = await bcrypt.hash(password,5)
                console.log(hashedpassword)
                await UsersModel.create({
                    email:email,
                    password:hashedpassword,
                    lastName:lastName,
                    firstName:firstName
                
                })

                res.json({
                    message:"you are signedup"
                })

            }catch(e){
                res.json({
                    message:"some problem in creating the profile",
                    error : error
                })
            }
        


    })

    userRouter.post("/signin",async function(req,res){
        
        const email = req.body.email;
        const password = req.body.password;

        const foundUser = await UsersModel.findOne({
              email:email
        })


        if(!foundUser){
           return res.json({
                message: "there are some error"
            })
        }

        const checkPassword =  await bcrypt.compare(password , foundUser.password)
        if(checkPassword){
            const token = jwt.sign(
                {id: foundUser._id.toString()},
                 JWT_SECRET,
                {expiresIn:'24h'});
            return res.json({
                token:token,
                message:"this is signin"
            })
        }else{
            return res.json({
                message:"wrong credentials"
            })
        }
    })
    userRouter.get("/purshases",(req,res)=>{
    })


    module.exports = {
        userRouter: userRouter
    }