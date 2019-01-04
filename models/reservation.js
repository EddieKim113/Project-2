module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        date: DataTypes.INTEGER,
        time: DataTypes.INTEGER
    });
    return Reservation;
};