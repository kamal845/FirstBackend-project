const express=require('express');
const router = express.Router(); 
const studentModel=require("../model/studentModel");
const studentController=require("../controller/studentController");
router.post('/postStudent',studentController.postDetail);
router.get('/getallStudent',studentController.getallDetail);
router.put('/updateStudent/:id',studentController.updateDetail);
router.delete('/deleteStudent',studentController.deleteDetail);
module.exports=router;