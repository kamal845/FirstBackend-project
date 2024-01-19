const express = require("express");
// const help= require("../help/heloResponse.txt");
const studentModel = require("../model/studentModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const app = express();
const router = require("../routes/studentRoute");
//use of swagger
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
module.exports = {
  postDetail: async (req, res) => {
    try {
      const newStudent = req.body;
      const savedStudent = await studentModel.create(newStudent);
      console.log("Saved Student:", savedStudent);
      res.status(200).json({
        status: "success",
        message: "Successfully added student",
        data: savedStudent,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Not added successfully",
        data: "nothing found",
      });
    }
  },
  getallDetail: async (req, res) => {
    try {
      const savedStudent = await studentModel.find();
      return res.json({
        statuscode: 200,
        status: "success",
        data: savedStudent,
      });
    } catch (error) {
      return res.json({
        statuscode: 404,
        status: "error",
        data: "Not found",
      });
    }
  },
  // deleteDetail: async (req, res) => {
  //   try {
  //     const result = await studentModel.deleteMany();
  //     if (result.deletedCount > 0) {
  //       return res.json({
  //         status: 200,
  //         statuscode: "success",
  //         message: "data deleted successfully",
  //       });
  //     } else {
  //       return res.json({
  //         status: 404,
  //         statuscode: "error",
  //         message: "not done",
  //       });
  //     }
  //   } catch (error) {
  //     return res.json({
  //       status: 500,
  //       status: "internal server",
  //       message: "data not found",
  //     });
  //   }
  // },
  // updateDetail: async (req, res) => {
  //   try {
  //     const updateStudent = await studentModel.updateMany();
  //     if (updateStudent.updatefined > 0) {
  //       res.json({
  //         statuscode: 200,
  //         status: "success",
  //         message: "update successfully",
  //         data: updateStudent,
  //       });
  //     } else {
  //       res.json({
  //         statuscode: 400,
  //         status: "error",
  //         message: "not update successfully",
  //       });
  //     }
  //   } catch (error) {
  //     res.json({
  //       statuscode: 500,
  //       status: "internal error",
  //       message: "not found",
  //     });
  //   }
  // },
  updateDetail: async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const { ...body } = req.body;
            const id = new ObjectId(req.params.id);
            const updatedStudent = await studentModel.findByIdAndUpdate({ _id: id }, {
                $set: body
            });

            if (updatedStudent) {
                return res.json({
                  statuscode: 200,
                  status: "success",
                  message: "Student Updated Successfully!!",
                  data:updatedStudent
                });
            } else {
              return res.json({
                statuscode: 404,
                status: "error",
                data: "Not found",
              });
            }

        } else {
          return res.json({
            statuscode: 404,
            status: "error",
            data: "Not found",
          });
        }

    } catch (e) {
        if (e.name === "ValidationError" || e.name === "CastError") {
          return res.json({
            statuscode: 404,
            status: "error",
            data: "Not found",
          });
        } else {
          return res.json({
            statuscode: 500,
            status: "error",
            data: "Not found",
          });
        }
    }
},
deleteDetail: async (req, res) => {
  try {
      if (ObjectId.isValid(req.params.id)) {
          const { ...body } = req.body;
          const id = new ObjectId(req.params.id);
          const deleteStudent = await studentModel.findByIdAndDelete({ _id: id }, {
              $set: body
          });

          if (deleteStudent) {
              return res.json({
                statuscode: 200,
                status: "success",
                message: "Student Updated Successfully!!",
                data:deleteStudent
              });
          } else {
            return res.json({
              statuscode: 404,
              status: "error",
              data: "Not found",
            });
          }

      } else {
        return res.json({
          statuscode: 404,
          status: "error",
          data: "Not found",
        });
      }

  } catch (e) {
      if (e.name === "ValidationError" || e.name === "CastError") {
        return res.json({
          statuscode: 404,
          status: "error",
          data: "Not found",
        });
      } else {
        return res.json({
          statuscode: 500,
          status: "error",
          data: "Not found",
        });
      }
  }
}

};


