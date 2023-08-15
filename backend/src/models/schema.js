const mongoose = require("mongoose");

const schema=new mongoose.Schema({
    todo:String,
    isComplete:Boolean
});

const model = mongoose.model("Todo",schema);

module.exports=model;