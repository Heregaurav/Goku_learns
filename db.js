const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
        email : {type: String , unique:true },
        password: String,
        lastName : String,
        firstName : String
        
})

const Admin = new Schema({
        email : {type: String , unique:true},
        password: String,
        lastName : String,
        firstName : String
        
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

module.exports = {
    UsersModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}