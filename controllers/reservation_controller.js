var path = require("path");
var db = require("../models");

exports.index = function(req, res) {

    // res.sendFile(path.join(__dirname, "../public/reservation.html"));

    db.Reservation.findAll({}).then(function(reservations) {
        var hbsObject = {
            reservations: reservations
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

    

};

// exports.makeReservation = function(req, res) {

// }