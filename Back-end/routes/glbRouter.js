const express = require('express');
const glbController = require("../controllers/glbController");

const router = express.Router();

// Define routes
router.get("/get-location", glbController.getLocations);
router.post("/get-clientMaster", glbController.getClientMaster); // This should be a POST route

router.get("/get-designation", glbController.getDesignation);

module.exports = router;
