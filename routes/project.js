const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.get('/create-page', projectController.createPage);
router.get('/details-page/:id', projectController.detailsPage);
router.post('/create-project', projectController.createProject);

module.exports = router;