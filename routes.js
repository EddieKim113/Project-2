module.exports = function(app){

    const landing = require('./routes/landing');
    const home = require('./routes/home');
    const menu = require('./routes/menu');
    const hours = require('./routes/hours');
    const contact = require('./routes/contact');
    const reservation = require('./routes/reservation');

    app.use('/', landing);
    app.use('/home', home);
    app.use('/menu', menu);
    app.use('/hours', hours);
    app.use('/contact', contact);
    app.use('/reservation', reservation);
//other routes..
}