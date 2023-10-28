const express = require('express');
const router = express.Router();
const issuesController = require('../controllers/issues_controller');

router.get('/create-page/:id', issuesController.createPage);
router.post('/create-issue/:pid', issuesController.createIssue);

module.exports = router;