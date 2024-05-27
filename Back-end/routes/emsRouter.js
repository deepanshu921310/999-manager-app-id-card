const express = require('express');
const emsController = require("../controllers/emsController");

const router = express.Router();

// Define routes
router.post("/register-employee", emsController.registerEmployee);
router.get("/get-all-users", emsController.getUsers);
router.get("/get-employeeDetails", emsController.getEmployeeDetails);
router.get("/get-employeeDetailsByID", emsController.getEmployeeDetailsByID);
router.put("/put-updateEmployeeIDCard", emsController.putUpdateEmployeeIDCard);

module.exports = router;
