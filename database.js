const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://ranjit:Ranjit1234@cluster0.szk3lvs.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})


Schema = mongoose.Schema({
    Name:String,
    phone:Number,
    Email:String
    })

studentModel = mongoose.model("student",Schema);
module.exports = studentModel