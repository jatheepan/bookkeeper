var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.jsonp({
        success: true,
        message: 'respond with a resource'
    });
});

module.exports = router;
