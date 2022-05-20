const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/searchGit/GitHub/:name', controller.searchGit);

module.exports = router;