const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./model/employee.model.js')
const app =express();
const port= 3000;


app.get("/api/employees", async (requestAnimationFrame, res)=>{
    try{
        const employees = await Employee.find();
        res.join(employees);
    }
    catch (error){
        res.status(500).json({success:false, message:error.message});
    }
})


mongoose.connect("mongodb://localhost:27017/GoogleDB").then(()=>{
    console.log("Database Connected");
})