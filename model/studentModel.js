const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const StudentSchema= Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId
     },
     Rollno:{
        type:Number
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    Email:{
        type:String
    }
})
module.exports=mongoose.model('student',StudentSchema);