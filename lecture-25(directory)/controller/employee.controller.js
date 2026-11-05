const Employee = require("../model/employee.model");

async function getEmployees(req, res) {
  try {
    const employees = await Employee.find();
    return res.json(employees);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

async function createEmployee(req, res) {
  try {
    const lastEmployee = await Employee.findOne().sort({ empId: -1 }).select("empId");
    const nextEmpId = Math.max(100, lastEmployee?.empId || 100) + 1;
    const employee = await Employee.create({
      ...req.body,
      empId: nextEmpId,
    });
    return res.status(201).json(employee);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

async function updateEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }
    return res.json(employee);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

async function deleteEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }
    return res.json({ success: true, message: "Employee deleted successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = { getEmployees, createEmployee, updateEmployee, deleteEmployee };
