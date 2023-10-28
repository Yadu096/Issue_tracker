const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

//route the requests
router.use('/project', require('./project'));
router.use('/issues', require('./issue'));

module.exports = router;