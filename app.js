"use strict";

let express = require('express');

let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
mongoose.connect('mongodb://localhost/bookkeeper');

mongoose.connection.on('error', console.log.bind(console, 'Unable to connect to mongo'));
mongoose.connection.on('open', console.info.bind(console, 'Mongo connection established'));

require('./routes/index')(app);

// catch 404 and forward to error handler}
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    let status = 500;
    let message = '';

    if(typeof err === 'string') {
        message = err;
    } else if(err instanceof Error) {
        message = err.message || message;
        status = err.status || status;
    }

    // render the error page
    res.status(status).jsonp({
        message,
        success: false
    });
});

module.exports = app;
