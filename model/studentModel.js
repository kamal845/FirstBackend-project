const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const StudentSchema= Schema({

    id:{
        type:mongoose.Schema.Types.ObjectId
     },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    Email:{
        type:String
    },
    Rollno:{
        type:Number
    }
})
module.exports=mongoose.model('student',StudentSchema);