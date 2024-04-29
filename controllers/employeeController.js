const Department = require("../models/departmentSchema");
const Employee = require("../models/employeeSchema");

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

exports.addEmployee = async (req, res) => {
    try {
        const existingEmployee = await Employee.findOne({ name: req.body.name });

        if (existingEmployee) {
            return res.status(400).json({ message: `Employee ${existingEmployee} already exists.` });
        }
        else {
            const addEmployee = await Employee.create({
                name: req.body.name,
                surname: req.body.surname,
                department: req.body.department
            });

            await Department.findByIdAndUpdate(
                department,
                { $push: { employees: addEmployee._id } },
                { new: true }
            );
            res.status(201).json({ message: "Employee added successfully.", addEmployee })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const updateEmployee = await Employee.findOneAndUpdate(
            { name: req.params.name },
            {
                $set: {
                    name: req.body.name,
                    surname: req.body.surname,
                    department: req.body.department
                }
            },
            {
                new: true
            }
        );

        if (!updateEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({ message: "Employee " + req.params.name + " has been updated", updateEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({ name: req.params.name });

        if (!employee) {
            res.status(404).json({ message: "Employee " + req.params.name + " was not found." });
        }
        else {
            res.status(200).json({ message: "Employee " + req.params.name + " has been deleted successfully." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};