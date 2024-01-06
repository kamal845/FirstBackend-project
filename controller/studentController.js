const express = require("express");
// const help= require("../help/heloResponse.txt");
const studentModel = require("../model/studentModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const app = express();
const router = require("../routes/studentRoute");
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
  deleteDetail: async (req, res) => {
    try {
      const result = await studentModel.deleteMany();
      if (result.deletedCount > 0) {
        return res.json({
          status: 200,
          statuscode: "success",
          message: "data deleted successfully",
        });
      } else {
        return res.json({
          status: 404,
          statuscode: "error",
          message: "not done",
        });
      }
    } catch (error) {
      return res.json({
        status: 500,
        status: "internal server",
        message: "data not found",
      });
    }
  },
  updateDetail: async (req, res) => {
    try {
      const updateStudent = await studentModel.updateMany();
      if (updateStudent.updatefined > 0) {
        res.json({
          statuscode: 200,
          status: "success",
          message: "update successfully",
          data: updateStudent,
        });
      } else {
        res.json({
          statuscode: 400,
          status: "error",
          message: "not update successfully",
        });
      }
    } catch (error) {
      res.json({
        statuscode: 500,
        status: "internal error",
        message: "not found",
      });
    }
  },
};
