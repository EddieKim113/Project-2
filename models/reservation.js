module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        type: DataTypes.STRING,
        email: DataTypes.STRING,
        partySize: DataTypes.INTEGER,
        date: DataTypes.DATEONLY,
        time: DataTypes.TIME
    });
    return Reservation;
};