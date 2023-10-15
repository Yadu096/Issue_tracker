const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.get('/create-page', projectController.createPage);

module.exports = router;