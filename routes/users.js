"use strict";
const router = module.exports = require('express').Router();
const userManager = require('../lib/UserManager');
const JSONFormatter = require('../lib/JSONFormatter');

/* GET users listing. */
router.get('/', (req, res, next) => {
    userManager.getUsers()
        .then(results => res.jsonp(JSONFormatter(results)))
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    userManager.getUserById(req.params.id)
        .then(results => res.jsonp(JSONFormatter(results)))
        .catch(err => next(err));
});

