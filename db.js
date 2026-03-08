const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://yourgaurav:XqOdJHxT2jnbLXvn@cluster0.gj5bui7.mongodb.net/CourseSelling_App").then(()=>{
     console.log("mongodb connected")
})
.catch((err)=>{

    console.log("failed to connect with database : ",err)

})

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
        email : {type: String , unique:true },
        password:String,
        Firstname : String,
        Lastname : String
})

const Admin = new Schema({
        email : {type: String , unique:true},
        password:String,
        Firstname : String,
        Lastname : String
})

const Course = new Schema({
        title : String,
        description : String,
        price : Number,
        imageUrl : String ,
        CreatorId : ObjectId
})

const Purchases = new Schema({
    userId : ObjectId,
    courseId :ObjectId
    
})

const UsersModel = mongoose.model("users",Users)
const AdminModel = mongoose.model("Admin",Admin)
const CourseModel = mongoose.model("Courses",Course)
const PurchaseModel = mongoose.model("purchases",Purchases)

module.export = {
    UsersModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}