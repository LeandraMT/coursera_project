const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");


router.get("/", employeeController.getEmployees);
router.post("/", employeeController.addEmployee);
router.put("/:name", employeeController.updateEmployee);
router.delete("/:name", employeeController.deleteEmployee);

module.exports = router;