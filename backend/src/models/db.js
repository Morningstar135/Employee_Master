const mongoose=require("mongoose")
const database=async()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/",
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log("Database Connection Established Successfully");
}

module.exports=database
