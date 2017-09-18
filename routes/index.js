"use strict";

module.exports = app => {
    app.use('/', require('./home'));
    app.use('/users', require('./users'));
    app.use('/incomes', require('./incomes'));
    app.use('/provinces', require('./provinces'));
    app.use('/expenses', require('./expenses'));
    app.use('/clients', require('./clients'));
    app.use('/suppliers', require('./suppliers'));
};