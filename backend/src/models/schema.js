const mongoose = require("mongoose");

const schema=new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Enter Employee Name"]
    },
    employeeId:{
        type:String,
        required:[true,"Please Enter Employee ID"]
    },
    address:{
        type:String,
        required:[true,"Please Enter Employee Address"]
    },
    dateOfBirth:{
        type:String,
        required:[true,"Please Enter Employee DOB"]
    },
    salary:{
        type:Number,
        required:[true,"Please Enter Employee Salary"]
    }


});

const model = mongoose.model("Todo",schema);

module.exports=model;