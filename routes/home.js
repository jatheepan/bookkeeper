"use strict";

const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.jsonp({
        success: true,
        message: 'HOME'
    });
});

module.exports = router;