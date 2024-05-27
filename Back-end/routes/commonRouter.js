const express = require('express');
const commonController = require('../controllers/commonController');

const router = express.Router();

// Route for uploading images
router.post('/upload', commonController.uploadImage);

module.exports = router;
