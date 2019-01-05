var express = require('express');
var router  = express.Router();

var hours_controller = require('../controllers/hours_controller');

router.get('/', hours_controller.index);

module.exports = router;