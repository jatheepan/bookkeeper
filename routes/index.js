"use strict";

module.exports = function(app) {
    app.use('/', require('./home'));
    app.use('/users', require('./users'));
};

// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.jsonp({
//         success: true,
//         data: []
//     });
// });
//
// module.exports = router;
