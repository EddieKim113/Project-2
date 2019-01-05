var express = require('express');
var router  = express.Router();

var reservation_controller = require('../controllers/reservation_controller');

router.get('/', reservation_controller.index);

router.post("/", reservation_controller.makeReservation);

module.exports = router;