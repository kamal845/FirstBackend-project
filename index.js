const express =require('express');
const mongoose=require('mongoose');
const app = express();
const port= 4000;
app.use(express.json());
const db="mongodb://localhost:27017/students";
const studentRoute = require("./routes/studentRoute");
app.use('/students', studentRoute);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected to db");
app.listen(port,()=>{
        console.log("this is newpage, and port will start on 4000 ");
});
})
.catch ((error)=>{
        console.log(error);
    });