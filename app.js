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

const Model = require('./models/User');
const squel = require('squel');
const mysql = require('./config/db').mysql;

require('./routes/index')(app);
app.use('/reconcile', (req, res, next) => {
    const query = "SELECT * FROM users"

    mysql.connect().then(connection => {
        connection.query(query, (err, data) => {
            data.forEach(record => {
                const instance = new Model(record);
                instance.save();
            });
        });
    });
    res.jsonp({
        success: true
    })
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
});

// catch 404 and forward to error handler}
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use(function(req, res, next) {
    console.log('came here');
    if(!err) {
        console.log('fuck yea');
    }
});

// error handler
app.use(function(err, req, res, next) {
    console.log('error handler');
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
