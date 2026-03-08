const express = require("express")
const mongoose  = require("mongoose")
const { userRouter } = require("./routes/user.js")
const { courseRouter} = require("./routes/course.js")
const {adminRouter} = require("./routes/admin.js")
const app = express()
const port = 3000;
app.use(express.json())
require("dotenv").config();


app.use("/user",userRouter);                                   // therefore all the structuring and prefixing of the routes happens over here 
app.use("/course",courseRouter); 
app.use("/admin",adminRouter);


async function main(){
        await mongoose.connect(process.env.DATABASE_CONNECTION).then(()=>{
            console.log("mongodb connected")
        })
        .catch((err)=>{
            console.log("failed to connect with database : ",err)
        })
         // we did this so that we donot return the frontend without connecting to the database 
        app.listen(port,()=>{
            console.log(`listening to port :${port}`)
        })


}
main()


//Routing in express.js is the mechanism that determines how an application responds to a client request for a specific endpoint - a combination of a urlpath) and a specific HTTP method  
//new thing that we are learning in the week 8 
//we structures all the routes to a specific folder that is routes folder and everything stays there 4


//But this is a ugly way of routing we can do far bette
// createUserRoutes(app) // by this we are not knowing which route ( path ) we are choosing to get the access of the file 
// createCourseRoutes(app)




