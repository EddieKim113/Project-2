var express = require('express');
var router  = express.Router();

var menu_controller = require('../controllers/menu_controller');

router.get('/', menu_controller.index);

module.exports = router;