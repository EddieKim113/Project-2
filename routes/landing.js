var express = require('express');
var router  = express.Router();

var landing_controller = require('../controllers/landing_controller');

router.get('/', landing_controller.index);

module.exports = router;