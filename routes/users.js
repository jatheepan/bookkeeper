"use strict";
const router = require('express').Router();
const userManager = require('../lib/UserManager');


/* GET users listing. */
router.get('/', (req, res, next) => {
    userManager.getUsers()
        .then(results => res.jsonp({
            success: true,
            data: results
        }))
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    userManager.getUserById(req.params.id)
        .then(result => res.jsonp({
            success: true,
            data: result
        }))
        .catch(err => next(err));
});
module.exports = router;
