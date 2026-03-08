const express = require("express")
const { userRoutes } = require("./routes/user.js")
const { courseRouter}=require("./routes/course.js")
const app = express()
const port = 3000;
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
app.use(express.json())


// routing in express.js is the mechanism that determines how an application responds to a client request for a specific endpoint - a combination of a urlpath) and a specific HTTP method  
//new thing that we are learning in the week 8 
//we structures all the routes to a specific folder that is routes folder and everything stays there 4


//but this is a ugly way of routing we can do far bette
// createUserRoutes(app) // by this we are not knowing which route ( path ) we are choosing to get the access of the file 
// createCourseRoutes(app)

app.user("/user",userRouter);
app.user("/course",courseRouter)


app.listen(port,()=>{
    console.log(`listening to port :${port}`)
})