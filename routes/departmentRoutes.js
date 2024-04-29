const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.get("/", departmentController.getDepartments);
router.post("/", departmentController.addDepartment);
router.delete("/:name", departmentController.deleteDepartment);

module.exports = router;