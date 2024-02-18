const express =require('express');
const mongoose=require('mongoose');
const punycode = require('punycode');
const app = express();
const port= 4000;
app.use(express.json());
const db="mongodb://127.0.0.1:27017/students";
const studentRoute = require("./routes/studentRoute");
app.use('/students', studentRoute);

//impelement swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');



/**
 * Swagger Documentation
 */
const options = {
    definition: swaggerDocument,
     apis: ['./app/routes*.js'], // files containing annotations as above
   };
   const swaggerDefinition = swaggerJSDoc(options);
   
   // Serve the Swagger UI
   app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDefinition));
   




//connect mongodb

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(()=>{
    console.log("connected to db");
app.listen(port,()=>{
        console.log("this is newpage, and port will start on 4000 ");
});
})
.catch ((error)=>{
        console.log(error);
    });


// for swagger js use go on this url 
    //https://medium.com/bb-tutorials-and-thoughts/how-to-add-swagger-to-nodejs-rest-api-7a542cfdc5e1 for swagger js use
