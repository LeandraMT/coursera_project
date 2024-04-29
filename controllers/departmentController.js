const Department = require("../models/departmentSchema");

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

exports.addDepartment = async (req, res) => {
    try {
        const existingDepartment = await Department.findOne({ name: req.body.name });

        if (existingDepartment) {
            return res.status(400).json({ message: `Department ${existingDepartment} already exists.` });
        }
        else {
            const addDepartment = await Department.create({
                name: req.body.name
            });

            res.status(201).json({ message: "New department added successfully.", addDepartment });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findOneAndDelete({ name: req.params.name });

        if (!department) {
            res.status(404).json({ message: "Department " + req.params.name + " was not found." });
        }
        else {
            res.status(200).json({ message: "Department " + req.params.name + " has been deleted successfully." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};